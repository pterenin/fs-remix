import { useState } from "react";
import { Link } from "@remix-run/react";
import { PostWithUserData } from "../../types/types";
import { Post } from "../Post";
import { Modal } from "../Modal";
export default function PostList({ posts }: { posts: PostWithUserData[] }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postId, setPostId] = useState<null | number>(null);

  const handleDelete = (id: number) => {
    setPostId(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    setModalOpen(false);
    // Trigger the delete action

    await fetch(`/post/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">Posts</h2>
        <Link to={`/post/new`}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add New Post
          </button>
        </Link>
      </div>
      {!posts.length && <div>No Posts</div>}
      {posts.map((post: PostWithUserData) => (
        <div key={post.id}>
          <Post post={post} handleDelete={handleDelete} />
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
