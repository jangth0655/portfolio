import React, { useRef } from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="bg-gray-900">
      <main className="min-h-screen pt-24 pb-4 px-2 max-w-5xl m-auto flex ">
        <div className="w-[60%]  bg-slate-500 border-2">
          <div></div>
        </div>
        <div className="border-2 w-[40%] flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-bold lg:text-3xl">
            Jang TaeHee
          </h1>
          <div className="h-[2px] w-[80%] bg-gray-500 my-3"></div>
          <div className=" p-2 text-white leading-7 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              amet provident vero saepe fugiat quaerat fugit, nulla voluptas
              voluptates impedit optio, similique dolore, porro ducimus minima
              consectetur? Placeat, fugiat debitis!
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
