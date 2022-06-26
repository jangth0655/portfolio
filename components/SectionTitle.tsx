import React from "react";

interface SectionTitleProps {
  title: string;
  content: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ content, title }) => {
  return (
    <div className="flex flex-col justify-center lg:flex-row lg:justify-evenly items-center w-[70%] m-auto py-14">
      <div className="text-center">
        <span className="text-4xl">
          My <strong>{title}</strong>
        </span>
      </div>
      <div className="flex lg:w-[50%] lg:border-l-2 border-t-2 border-yellow-400 lg:pl-4 mt-4 pt-4 lg:border-t-0">
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, ab
          facilis hic quas assumenda rerum voluptatum veniam libero
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
