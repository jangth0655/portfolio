import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";

interface SkillProps {}

const Skill: React.FC<SkillProps> = ({}) => {
  return (
    <section className="bg-slate-100 ">
      <main className="min-h-screen px-6  m-auto text-gray-800">
        <SectionTitle title="Skill" content="asdf" My={true} />
      </main>
    </section>
  );
};

export default Skill;
