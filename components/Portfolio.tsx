import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectsImage from "./projectsImage";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import ItemDetail from "./ItemDetail";
import cls from "../libs/cls";
import data from "../data/data";

type Title = "ALL" | "Next JS" | "GraphQL & Node Js" | "React JS";
type Data = {
  id?: number;
  name?: string;
  image?: StaticImageData;
  detail?: string;
};

const titles = ["ALL", "Next JS", "GraphQL & Node Js", "React JS"];

const Portfolio: React.FC = () => {
  const [bigProject, setBigProject] = useState(false);
  const [id, setId] = useState<number>();
  const [dataSrc, setDataSrc] = useState<Data>({
    id: undefined,
    name: undefined,
    image: undefined,
    detail: undefined,
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
    setDataSrc({
      ...data,
      id: data.id,
      name: data.name,
      image: data.image,
      detail: data.detail,
    });
  };

  return (
    <>
      <section className="relative bg-[#1A1A1A]">
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
                <div className="absolute bg-black opacity-80 w-full h-full z-50" />
                <Image
                  src={dataSrc.image ? dataSrc.image : ""}
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                />
              </motion.div>
              <motion.div
                layoutId={id + ""}
                className="w-96 h-96 rounded-md z-50  absolute left-0 right-0 top-0 bottom-0 m-auto"
              >
                <ItemDetail {...dataSrc} />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <main className="min-h-screen px-6 m-auto text-white max-w-6xl">
          <SectionTitle My={true} title="Projects" content="asdf" />

          <div className="flex justify-evenly  m-auto text-lg font-bold mb-8">
            {titles.map((title, i) => (
              <span
                onClick={() => onProject(title)}
                className={cls(
                  "hover:text-[#DE5241] cursor-pointer transition-all px-2 rounded-md",
                  imageTitle === title
                    ? "ring-1 ring-offset-1 ring-[#DE5241]"
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
            className="md:h-[32rem] h-96 pb-6 grid md:grid-cols-4  grid-cols-2  gap-2"
          >
            {data.map((item) =>
              item.name === imageTitle ? (
                <motion.div
                  layoutId={item.id + ""}
                  onClick={() => bigImage(item.id, item)}
                  style={{ height: imageBoxHeight ? imageBoxHeight / 2 : "" }}
                  key={item.id}
                  className="relative"
                >
                  <ProjectsImage title={item.name} image={item.image} />
                </motion.div>
              ) : null
            )}
            {imageTitle === "ALL" &&
              data.map((item) => (
                <motion.div
                  layoutId={item.id + ""}
                  onClick={() => bigImage(item.id, item)}
                  key={item.id}
                  className="relative"
                >
                  <ProjectsImage title={item.name} image={item.image} />
                </motion.div>
              ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Portfolio;
