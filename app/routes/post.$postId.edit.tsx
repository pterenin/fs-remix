import {
  ActionFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostForm from "../components/PostForm";
import { findPost, updatePost } from "prisma/helpers/post";
import { PostWithUserData } from "../types/types";

type LoaderParams = {
  postId: string;
};

type LoaderData = {
  post: PostWithUserData;
};

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const { postId } = params as LoaderParams;
  const post = await findPost(postId);
  return json({ post });
};

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title")?.toString();
  let content = formData.get("content")?.toString();
  const postId = formData.get("postId")?.toString();

  if (!title || !content || !postId) {
    return json({ error: "Missing fields" }, { status: 400 });
  }

  await updatePost({ postId, title, content });
  return redirect("/");
};

export default function NewJournalEntry() {
  const { post } = useLoaderData<LoaderData>();
  return <PostForm post={post} />;
}
