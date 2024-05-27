import { Link, useNavigate } from "@remix-run/react";
import { PostWithUserData } from "../../types/types";

type PostFormProps = {
  post: PostWithUserData;
  handleDelete: (id: number) => void;
};

export const Post = ({ post, handleDelete }: PostFormProps) => {
  const navigate = useNavigate();
  const onEditClick = () => {
    navigate(`/post/${post.id}/edit`);
  };

  return (
    <div className="block mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {post.content}
      </p>

      <Link
        to={`/post/user/${post.author.id}`}
        className="text-sm mt-4 font-normal text-gray-400 dark:text-gray-400 hover:text-black"
      >
        {post.author.name}
        {" | "}
        {post.author.email}
      </Link>
      <p className="text-sm font-normal text-gray-400 dark:text-gray-400">
        on {new Date(post.createdAt).toLocaleString()}
      </p>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onEditClick}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            handleDelete(post.id);
          }}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
