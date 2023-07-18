"use client";

import Button from "@/components/atoms/button";
import SvgIcon from "@/components/atoms/svgIcon";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { usePathname } from "next/navigation";

interface MainTemplate {
  appName: string;
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplate> = ({ appName, children }) => {
  const pathName = usePathname();

  return (
    <body className="w-full font-sans bg-slate-50 text-slate-900 min-h-[100vh]">
      <header className="w-full h-20  md:h-28 ">
        <div className="m-auto flex h-full max-w-xl items-center justify-around p-3 md:max-w-4xl xl:max-w-7xl">
          <h1 className="text-2xl font-medium lg:text-4xl whitespace-pre-wrap">
            {appName}
          </h1>
          <div className="flex items-center gap-2">
            <Button disabled={pathName === "/"}>
              <Link href={"/"}>Books</Link>
            </Button>
            <Button disabled={pathName === "/about"}>
              <Link href={"/about"}>About</Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="m-auto max-w-xl pt-3 md:max-w-4xl xl:max-w-7xl">
        {children}
      </div>
      <footer className="w-full py-2 bg-teal-100">
        <div className="m-auto max-w-xl py-3 md:max-w-4xl xl:max-w-7xl text-sm font-thin">
          <p className="text-center">Ruan Ferreira</p>
          <p className="text-center">ruan.fer.gui@gmail.com</p>
          <div className="flex justify-center gap-2">
            <SvgIcon
              icon={AiFillGithub}
              alt="Ruan Ferreira github"
              size="normal"
              link="https://github.com/droderuan"
            />
            <SvgIcon
              icon={AiFillLinkedin}
              alt="Ruan Ferreira linkedin"
              size="normal"
              link="https://www.linkedin.com/in/ruan-ferreira-87a15a180/"
            />
          </div>
          <p className="text-center">
            Copyright (c) 2023 The New York Times Company. All Rights Reserved.
          </p>
        </div>
      </footer>
    </body>
  );
};

export default MainTemplate;
