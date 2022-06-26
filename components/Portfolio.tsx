import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import data from "./data";
import ProjectsImage from "./projectsImage";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import ItemDetail from "./ItemDetail";
import cls from "../libs/cls";

interface PortfolioProps {}

type Title = "ALL" | "Next JS" | "GraphQL & Node Js" | "React JS";
type Data = {
  id?: number;
  name?: string;
  image?: StaticImageData;
};

const titles = ["ALL", "Next JS", "GraphQL & Node Js", "React JS"];

const Portfolio: React.FC<PortfolioProps> = () => {
  const [bigProject, setBigProject] = useState(false);
  const [id, setId] = useState<number>();
  const [dataSrc, setDataSrc] = useState<Data>({
    id: undefined,
    name: undefined,
    image: undefined,
  });
  const imageRef = useRef<HTMLDivElement>(null);
  const imageBoxHeight = imageRef.current && imageRef.current?.offsetHeight;
  const [imageTitle, setImageTitle] = useState<Title>("ALL");
  const onProject = (name: string) => {
    switch (name) {
      case "ALL":
        setImageTitle(name);
        break;
      case "Next JS":
        setImageTitle(name);
        break;
      case "GraphQL & Node Js":
        setImageTitle(name);
        break;
      case "React JS":
        setImageTitle(name);
        break;
      default:
        break;
    }
  };

  const ImageVar = {
    initial: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    animate: {
      backgroundColor: "rgba(0, 0, 0, 8)",
    },
    exit: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  };

  const bigImage = (id: number, data: Data) => {
    setId(id);
    setBigProject(true);
    setDataSrc((prev) => ({
      ...data,
      id: data.id,
      name: data.name,
      image: data.image,
    }));
  };

  return (
    <>
      <section className="relative">
        <AnimatePresence>
          {bigProject ? (
            <motion.div>
              <motion.div
                variants={ImageVar}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={() => setBigProject(false)}
                className="flex justify-center items-center bg-black absolute w-full h-full opacity-90 z-20 "
              >
                <div className="absolute bg-black opacity-50 w-full h-full z-50" />
                <Image
                  src={dataSrc.image ? dataSrc.image : ""}
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                />
              </motion.div>
              <motion.div
                layoutId={id + ""}
                className="w-96 h-96 rounded-md z-50 bg-white absolute left-0 right-0 top-0 bottom-0 m-auto"
              >
                <ItemDetail {...dataSrc} />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <main className="min-h-screen px-6 m-auto text-gray-800 max-w-6xl">
          <SectionTitle title="Projects" content="asdf" />

          <div className="flex justify-evenly  m-auto text-lg font-bold mb-14">
            {titles.map((title, i) => (
              <span
                onClick={() => onProject(title)}
                className={cls(
                  "hover:text-yellow-500 cursor-pointer transition-all px-2 rounded-md",
                  imageTitle === title
                    ? "ring-2 ring-offset-2 ring-yellow-300"
                    : ""
                )}
                key={i}
              >
                {title}
              </span>
            ))}
          </div>

          <div
            ref={imageRef}
            className="md:h-[32rem] h-96 grid md:grid-cols-4  grid-cols-2 gap-2 py-2"
          >
            {data.map((item) => {
              return item.name === imageTitle ? (
                <motion.div
                  layoutId={item.id + ""}
                  onClick={() => bigImage(item.id, item)}
                  style={{ height: imageBoxHeight ? imageBoxHeight / 2 : "" }}
                  key={item.id}
                  className="relative"
                >
                  <ProjectsImage image={item.image} />
                </motion.div>
              ) : imageTitle === "ALL" ? (
                <motion.div
                  layoutId={item.id + ""}
                  onClick={() => bigImage(item.id, item)}
                  key={item.id}
                  className="relative"
                >
                  <ProjectsImage image={item.image} />
                </motion.div>
              ) : null;
            })}
          </div>
        </main>
      </section>
    </>
  );
};

export default Portfolio;
