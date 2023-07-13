import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="my-2 flex flex-col justify-center px-4 md:px-2 lg:flex-row">
      <div className="flex-1">{children}</div>
      <hr className="h-px my-2 bg-slate-300 border-0"></hr>
    </section>
  );
};

export default Section;
