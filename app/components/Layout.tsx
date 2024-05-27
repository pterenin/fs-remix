import { PropsWithChildren } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="p-4 sm:ml-64 mt-20">{children}</div>
    </>
  );
};
