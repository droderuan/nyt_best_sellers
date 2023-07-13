import React from "react";

interface MainTemplate {
  appName: string;
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplate> = ({ appName, children }) => {
  return (
    <body className="dk:bg-sky-950 bg-slate-10 dk:text-gray-50 text-slate-900">
      <header className="h-28  md:h-60">
        <div className="m-auto flex h-full max-w-xl items-center p-3 md:max-w-4xl xl:max-w-7xl">
          <h1 className="text-4xl font-medium lg:text-6xl whitespace-pre-wrap">
            {appName}
          </h1>
        </div>
      </header>
      <div className="m-auto max-w-xl pt-3 md:max-w-4xl xl:max-w-7xl">
        {children}
      </div>
    </body>
  );
};

export default MainTemplate;
