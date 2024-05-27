import {
  ActionFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { findPost, deletePost } from "prisma/helpers/post";

type LoaderParams = {
  postId: string;
};

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const { postId } = params as LoaderParams;
  const post = await findPost(postId);
  if (!post) {
    throw new Response("Post not found", { status: 404 });
  }
  return json({ post });
};

export let action: ActionFunction = async ({ request, params }) => {
  const postId = Number(params.postId);

  if (!postId) {
    return json({ error: "Missing postID" }, { status: 400 });
  }
  if (request.method === "DELETE") {
    await deletePost({ postId });
  }
  return redirect("/posts");
};
