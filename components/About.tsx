import Image from "next/image";
import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="bg-[#0A1011]">
      <main className="min-h-screen py-28 pb-4 px-2 max-w-5xl m-auto md:flex-row  flex flex-col justify-center items-center md:justify-center">
        <div className="relative w-[70%] md:h-screen md:mr-5 mr-0 mb-5 h-96">
          <Image
            src={`https://imagedelivery.net/h3kJx8b63YkXouCAFpwF5w/31fdd62a-89ad-4029-8a70-3595cc7c1300/public`}
            layout="fill"
            objectFit="cover"
            alt="avatar"
            className="rounded-lg overflow-hidden "
          />
        </div>

        <div className="z-30 md:w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl font-bold lg:text-4xl">
            Jang TaeHee
          </h1>
          <div className="h-[1.5px] w-[90%] bg-gray-400 my-3"></div>
          <div className="p-2 text-white leading-7 ">
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
