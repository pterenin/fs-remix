import prisma from "../../lib/prisma";

export const fetchAllPosts = async () => {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return posts;
};

export const fetchPostsByAuthorId = async (authorId: number) => {
  const posts = await prisma.post.findMany({
    where: { authorId },
    include: { author: true },
  });
  posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return posts;
};

export const fetchAllUsers = async () => {
  return await prisma.user.findMany();
};

export const findPost = async (id: string) => {
  return await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });
};

export const upsertUser = async ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => {
  return await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, name },
  });
};

export const cretePost = async ({
  title,
  content,
  authorId,
}: {
  title: string;
  content: string;
  authorId: number;
}) => {
  return await prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });
};

export const updatePost = async ({
  postId,
  title,
  content,
}: {
  postId: string;
  title: string;
  content: string;
}) => {
  await prisma.post.update({
    where: { id: Number(postId) },
    data: { title, content },
  });
};

export const deletePost = async ({ postId }: { postId: number }) => {
  await prisma.post.delete({
    where: { id: postId },
  });
};
