import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectsImageProps {
  image: StaticImageData;
  title?: string;
}

const ProjectsImage: React.FC<ProjectsImageProps> = ({ image, title }) => {
  return (
    <>
      <div className="absolute w-full h-full bg-black  z-10 cursor-pointer hover:opacity-5 transition-all rounded-md flex items-center justify-center text-yellow-300 font-bold">
        <span>{title}</span>
      </div>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt="project"
        className="rounded-md overflow-hidden"
      />
    </>
  );
};

export default ProjectsImage;
