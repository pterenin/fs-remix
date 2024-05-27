import { fetchPostsByAuthorId } from "prisma/helpers/post";
import { useLoaderData } from "@remix-run/react";
import PostList from "../components/PostList";
import { PostWithUserData } from "../types/types";

type LoaderData = {
  posts: PostWithUserData[];
};

import { json, type LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = async ({ params }) => {
  const { userId } = params;
  const authorId = Number(userId);
  const posts = await fetchPostsByAuthorId(authorId);
  return json({ posts });
};

export default function PostsByUser() {
  const data = useLoaderData<LoaderData>();
  return <PostList posts={data.posts} />;
}
