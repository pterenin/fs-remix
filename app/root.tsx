import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { Layout } from "./components/Layout";
import { UserList } from "./components/UserList";
import type { User } from "@prisma/client";
import { fetchAllUsers } from "prisma/helpers/post";
import { json, type LoaderFunction, LinksFunction } from "@remix-run/node";

import styles from "./styles/tailwind.css?url";

type LoaderData = {
  users: User[];
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader: LoaderFunction = async () => {
  const users = await fetchAllUsers();
  return json({ users });
};

export function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<LoaderData>();
  if (!data) return;
  const users: User[] = data.users;
  return (
    <Document>
      <Layout>
        <div id="sidebar">
          <UserList users={users} />
        </div>
        <Outlet />
      </Layout>
    </Document>
  );
}
