import Image from "next/image";
import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="bg-[#181818]">
      <main className="min-h-screen py-28 pb-4 px-2 max-w-5xl m-auto md:flex-row  flex flex-col justify-center items-center md:justify-center">
        <div className="relative w-[40%] md:h-[40rem] md:mr-5 mr-0 mb-5 h-96">
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
          <h1 className="text-gray-200 text-2xl font-bold lg:text-4xl">
            Jang TaeHee
          </h1>
          <div className="h-[1.5px] w-[90%] bg-yellow-400 my-3"></div>
          <div className="p-2 text-gray-200 leading-7">
            <p>
              한 가지 분야에 전문성을 쌓고자 노력하고 있습니다. 이를 위해 주로
              리액트를 기반으로 프로젝트 개발 경험을 즐기고 있습니다. 또한
              새로운 것에 두려움 없이 도전하고 있습니다. 이를 위해 현재는 Next
              JS, GraphQL, React Native 등을 배우고 프로젝트 개발을 하며 습득해
              나가고 있습니다.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
