import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <div className="fixed z-[999] top-0 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/80 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0 place-items-center ">
          <div className="relative flex items-center max-w-screen-lg m-auto justify-between">
            <div className="flex">
              <Link to="/">
                <h1 className="mr-4">JOURNAL APP </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
