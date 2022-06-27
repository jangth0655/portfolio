import { useAnimation, useViewportScroll, motion } from "framer-motion";
import Image from "next/image";
import React, { SetStateAction, useEffect, useRef, useState } from "react";

interface AboutProps {}

const variant = {
  initial: {
    color: "rgba(0,0,0,0)",
  },
  scroll: {
    color: "rgba(0,0,0,1)",
  },
};

const About: React.FC<AboutProps> = ({}) => {
  const [opacity, setOpacity] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const animation = useAnimation();

  const rangeNumber =
    sectionRef.current?.offsetHeight! - descriptionRef.current?.offsetHeight!;

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        animation.start("scroll");
      } else {
        animation.start("initial");
      }
    });
  }, [animation, rangeNumber, scrollY]);

  return (
    <section ref={sectionRef} className="bg-[#0A1011]">
      <main className="min-h-screen py-28 pb-4 px-2 max-w-5xl m-auto md:flex-row  flex flex-col justify-center items-center md:justify-center">
        <div className="relative w-[70%] md:h-screen md:mr-5 mr-0 mb-5 h-96">
          <Image
            src={`https://imagedelivery.net/h3kJx8b63YkXouCAFpwF5w/31fdd62a-89ad-4029-8a70-3595cc7c1300/public`}
            layout="fill"
            objectFit="cover"
            alt="avatar"
            className="rounded-lg overflow-hidden "
            priority
          />
        </div>

        <div className="z-30 md:w-[50%] flex flex-col justify-center items-center ">
          <h1 className="text-white text-2xl font-bold lg:text-4xl">
            Jang TaeHee
          </h1>
          <div className="h-[1.5px] w-[90%] bg-yellow-400 my-3"></div>
          <motion.div
            variants={variant}
            animate={animation}
            ref={descriptionRef}
            className="p-2 text-white leading-7"
          >
            <p>
              한 가지 분야에 전문성을 쌓고자 노력하고 있습니다. 이를 위해 주로
              리액트를 기반으로 프로젝트 개발 경험을 즐기고 있습니다. 또한
              새로운 것에 두려움 없이 도전하고 있습니다. 이를 위해 현재는 Next
              JS, GraphQL, React Native 등을 배우고 프로젝트 개발을 하며 습득해
              나가고 있습니다.
            </p>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default About;
