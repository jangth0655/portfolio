import React from "react";
import ProgressBar from "./ProgressBar";
import SectionTitle from "./SectionTitle";

interface SkillProps {
  title?: string;
}

const Skill: React.FC<SkillProps> = ({ title }) => {
  return (
    <section className="bg-[#181818] ">
      <main className="min-h-screen px-6  m-auto text-gray-800">
        <SectionTitle title="Skill" content="asdf" My={true} />
        <div className="h-[32rem]  md:grid  md:grid-cols-2 md:space-y-0">
          <ProgressBar text="Javascript" range={80} />
          <ProgressBar text="HTMl & CSS" range={80} />
          <ProgressBar text="React" range={80} />
          <ProgressBar text="React Native" range={50} />
          <ProgressBar text="Next JS" range={75} />
          <ProgressBar text="GraphQL" range={60} />
        </div>
      </main>
    </section>
  );
};

export default Skill;
