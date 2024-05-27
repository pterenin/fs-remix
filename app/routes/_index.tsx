import { PostWithUserData } from "../types/types";
import PostList from "../components/PostList";

import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchAllPosts, upsertUser, cretePost } from "prisma/helpers/post";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

type LoaderData = {
  posts: PostWithUserData[];
};

export const loader: LoaderFunction = async () => {
  const posts = await fetchAllPosts();
  return json({ posts });
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <PostList posts={data.posts} />
      {/* <pre>{JSON.stringify(data.posts, null, 2)}</pre> */}
    </div>
  );
}
