import React from "react";

interface Page {
  children: React.ReactNode;
}

const Page: React.FC<Page> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 px-4 md:px-2 lg:flex-row">
      <div className="flex-1 w-full">{children}</div>
    </main>
  );
};

export default Page;
