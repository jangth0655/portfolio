import React, {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const [navActive, setNavActive] =
    useState<SetStateAction<string | null>>("about");
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  const observerFn: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setNavActive(entry.target.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    const targetRef = [
      aboutRef.current,
      portfolioRef.current,
      skillRef.current,
      contactRef.current,
    ];

    const observer = new IntersectionObserver(observerFn, options);
    if (targetRef) targetRef.forEach((ref) => ref && observer.observe(ref));

    return () => {
      if (targetRef) targetRef.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [options]);

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
          "fixed w-full bg-[#181818] flex justify-end px-6 py-4 z-50"
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
              <div className="relative" key={i}>
                <span
                  onClick={() => onScroll(item)}
                  className="p-2 cursor-pointer text-gray-400 hover:text-[#DE5241] transition"
                >
                  {item}
                </span>
                {navActive === item && (
                  <motion.div
                    layoutId="circle"
                    className="absolute w-2 h-2 bg-[#DE5241] rounded-full right-0 left-0 -bottom-2 m-auto"
                  />
                )}
              </div>
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
              "absolute -z-50 flex h-52 w-full  flex-col justify-evenly right-0 top-10 origin-top-right "
            )}
          >
            <div className="w-full h-full  absolute -z-10 bg-[#181818] opacity-90"></div>
            {navItem.map((item, i) => (
              <div className="flex justify-center" key={i}>
                <span
                  onClick={() => onScroll(item)}
                  className="text-gray-400 hover:text-[#DE5241] transition uppercase cursor-pointer z-20"
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </nav>
      <main className={cls("m-auto")} onClick={() => setActive(false)}>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="portfolio" ref={portfolioRef}>
          <Portfolio />
        </section>
        <section id="skill" ref={skillRef}>
          <Skill />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
        {children}
      </main>
      <footer></footer>
    </section>
  );
};

export default Layout;
