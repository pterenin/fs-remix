import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import PostForm from "../components/PostForm";
import { upsertUser, cretePost } from "prisma/helpers/post";

export const loader: LoaderFunction = async () => {
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
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
