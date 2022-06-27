import React from "react";

interface SectionTitleProps {
  title: string;
  My?: boolean;
  content: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ content, title, My }) => {
  return (
    <div className="py-14">
      <div className="relative lg:flex-row flex flex-col space-x-4 items-center justify-center">
        {My ? (
          <span className="text-3xl">
            My <span className="font-bold ">{title}</span>
          </span>
        ) : (
          <span className="text-4xl font-bold">{title}</span>
        )}

        <div className="w-[30%] my-2 h-[2px] lg:w-[2px] lg:h-9 bg-yellow-400"></div>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
