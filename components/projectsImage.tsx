import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectsImageProps {
  image: StaticImageData;
}

const ProjectsImage: React.FC<ProjectsImageProps> = ({ image }) => {
  return (
    <>
      <div className="absolute w-full h-full bg-black opacity-80 z-10 cursor-pointer hover:opacity-5 transition-all rounded-md" />
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
