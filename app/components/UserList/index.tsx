import { Link, useLoaderData } from "@remix-run/react";
import type { User } from "@prisma/client";

export const UserList = ({ users }: { users: User[] }) => {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 pt-20 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {users.length ? (
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                All
              </Link>
            </li>
            {users.map((user) => (
              <li key={user.id}>
                <Link
                  to={`/user/${user.id}`}
                  className="flex flex-col p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className=" ">{user.name}</p>
                  <p className="text-small text-gray-400">{user.email}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No Users</i>
          </p>
        )}
      </div>
    </div>
  );
};
