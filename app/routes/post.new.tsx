import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import PostForm from "../components/PostForm";
import { upsertUser, cretePost } from "prisma/helpers/post";

export let loader: LoaderFunction = async () => {
  return json({});
};

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title")?.toString();
  let content = formData.get("content")?.toString();
  const email = formData.get("email")?.toString();
  const name = formData.get("name")?.toString();

  if (!title || !content || !email || !name) {
    return json({ error: "Missing fields" }, { status: 400 });
  }

  const user = await upsertUser({ name, email });
  await cretePost({ title, content, authorId: user.id });
  return redirect("/");
};

export default function NewJournalEntry() {
  return <PostForm />;
}
