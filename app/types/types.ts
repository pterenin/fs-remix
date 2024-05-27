import type { Post, User } from "@prisma/client";

export type PostWithUserData = Omit<Post, "createdAt" | "author"> & {
  createdAt: string;
  author: User;
};
