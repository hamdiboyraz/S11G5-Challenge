import React from "react";
import { skills } from "../data/skills";
const Skills = (props) => {
  const { data } = props;
  return (
    <section id="skills">
      <div className="bg-primary dark:bg-black pb-12">
        <div className="w-2/3 mx-auto">
          <h2 className="font-semibold text-5xl mb-14">{data.skills}</h2>
          <div className="flex justify-between text-center mb-12">
            {Object.entries(skills).map(([key, value]) => (
              <div>
                <img src={value} alt={key} key={key} className="mb-3" />
                <span className="text-togglePrimary font-medium text-2xl">
                  {key}
                </span>
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
