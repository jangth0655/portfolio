import React, { useCallback, useEffect, useRef, useState } from "react";
import cls from "../libs/cls";
import { motion, Variants } from "framer-motion";
import About from "./About";
import Portfolio from "./Portfolio";
import Skill from "./Skill";
import Contact from "./Contact";

interface LayoutProps {
  children?: React.ReactNode;
}

const navItem = ["about", "portfolio", "skill", "contact"];
const navVariant: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: (active: boolean) => ({
    scaleY: active ? 1 : 0,
    transition: {
      type: "linear",
    },
  }),
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [windowSize, setWindowSize] = useState(0);
  const [active, setActive] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const onScroll = (item: string) => {
    switch (item) {
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
        break;
      case "portfolio":
        portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skill":
        skillRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
    setActive(false);
  };

  const onActiveNav = () => setActive((prev) => !prev);

  const handleWindowSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  const smallWindow = windowSize < 768;

  return (
    <section className="-z-10">
      <nav
        className={cls(
          "fixed w-full bg-[#0A1011] flex justify-end px-6 py-2 z-50"
        )}
      >
        <div
          className={cls(
            "w-[100%] flex",
            smallWindow ? "justify-between" : "justify-around uppercase"
          )}
        >
          {smallWindow && (
            <div className="">
              <span className="uppercase text-white">taehee</span>
            </div>
          )}
          {smallWindow ? (
            <svg
              onClick={onActiveNav}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6  w-6 hover:cursor-pointer text-gray-400 hover:text-white transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            navItem.map((item, i) => (
              <span
                onClick={() => onScroll(item)}
                className="p-2 cursor-pointer text-gray-400 hover:text-yellow-500 transition"
                key={i}
              >
                {item}
              </span>
            ))
          )}
        </div>

        {smallWindow && (
          <motion.div
            variants={navVariant}
            initial="initial"
            animate="animate"
            custom={active}
            className={cls(
              "absolute -z-50 flex h-52 w-full  flex-col justify-evenly bg-[#0A1011] right-0 top-10 origin-top-right opacity-90"
            )}
          >
            {navItem.map((item, i) => (
              <div className="flex justify-center" key={i}>
                <span
                  onClick={() => onScroll(item)}
                  className="text-gray-400 hover:text-yellow-500 transition uppercase cursor-pointer"
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </nav>
      <main className={cls("m-auto")} onClick={() => setActive(false)}>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={portfolioRef}>
          <Portfolio />
        </section>
        <section ref={skillRef}>
          <Skill />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
        {children}
      </main>
      <footer></footer>
    </section>
  );
};

export default Layout;
