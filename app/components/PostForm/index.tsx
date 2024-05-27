import { Form } from "@remix-run/react";
import { InputField } from "./InputField";
import { TextAreaWithSuggestion } from "./TextAreaWithSuggestion";
import { PostWithUserData } from "../../types/types";

type PostFormProps = {
  post?: PostWithUserData;
};

export default function JournalEntryForm({ post }: PostFormProps) {
  return (
    <Form method="post">
      {post && <input type="hidden" name="postId" value={post.id} />}
      <InputField
        label="Title"
        name="title"
        type="text"
        defaultValue={post?.title || ""}
        placeholder="Enter Title"
      />
      <TextAreaWithSuggestion defaultValue={post?.content || ""} />

      {!post && (
        <>
          <InputField
            label="User Name"
            name="name"
            type="text"
            placeholder="Enter Name"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Email"
          />
        </>
      )}

      <button
        type="submit"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        {post ? "Update Post" : "Create Post"}
      </button>
    </Form>
  );
}
