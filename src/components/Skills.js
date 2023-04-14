import React from "react";
import { skills } from "../data/skills";
const Skills = (props) => {
  const { data } = props;
  return (
    <section id="skills">
      <div className="bg-primary dark:bg-primaryDark pb-12">
        <div className="w-2/3 mx-auto">
          <h2 className="font-semibold text-5xl mb-14 dark:text-[#AEBCCF]">
            {data.skills}
          </h2>
          <div className="flex justify-between md:flex-wrap text-left mb-12">
            {Object.entries(skills).map(([key, value]) => (
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8 pr-2" key={key}>
                <div className="flex items-center gap-1 text-homeName dark:text-[#b7aaff] font-medium text-2xl">
                  <span className="text-4xl md:text-xl">{value}</span>
                  <span className="hidden md:inline">{key}</span>
                </div>
                <p className="hidden md:block mt-2 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, eaque.
                </p>
              </div>
            ))}
          </div>

          <hr className="w-full h-px bg-hrColor border-none" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
