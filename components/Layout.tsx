import React, { useCallback, useEffect, useState } from "react";
import cls from "../libs/cls";
import { motion, Variants } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const navItem = ["About", "portfolio", "skill", "contact"];
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
    <section>
      <nav
        className={cls("fixed w-full bg-gray-900 flex justify-end px-2 py-2")}
      >
        <div
          className={cls(
            "w-[50%] flex",
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
                className="p-2 cursor-pointer text-gray-400 hover:text-white transition"
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
              "absolute -z-50 flex h-52 w-full  flex-col justify-evenly bg-gray-800 right-0 top-10 origin-top-right"
            )}
          >
            {navItem.map((item, i) => (
              <div className="flex justify-center" key={i}>
                <span className="text-gray-400 hover:text-white transition uppercase cursor-pointer">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </nav>
      <main className="max-w-2xl m-auto">{children}</main>
      <footer></footer>
    </section>
  );
};

export default Layout;
