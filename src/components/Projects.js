import React from "react";
import { projects } from "../data/projects";

const Projects = (props) => {
  const { language, data } = props;
  return (
    <section id="projects">
      <div className="bg-primary dark:bg-primaryDark pb-36">
        <div className="w-2/3 mx-auto">
          <h2 className="font-semibold text-5xl mb-9 dark:text-[#AEBCCF]">
            {data.projects.projects}
          </h2>
          <div className="md:flex md:justify-between md:gap-24 md:mb-12">
            {Object.entries(projects).map(
              ([key, { image, name, text, tools, links }]) => (
                <div key={key}>
                  <img
                    src={image}
                    alt={key}
                    className="w-[250px] h-[250px] mb-3"
                  />
                  <p className="text-homeName font-medium text-2xl mb-3 dark:text-[#CFCBFF]">
                    {name}
                  </p>
                  <p className="text-left mb-3 dark:text-white">
                    {text[language ? "tr" : "eng"]}
                  </p>
                  <div className="flex gap-2 mb-6">
                    {tools.map((tool) => (
                      <button className="btn-skills" key={tool}>
                        {tool}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between gap-2">
                    <a
                      href={links[0]}
                      target="_blank"
                      className="text-navHire font-medium underline dark:text-[#E1E1FF]"
                    >
                      Github
                    </a>
                    <a
                      href={links[1]}
                      target="_blank"
                      className="text-navHire font-medium underline dark:text-[#E1E1FF]"
                    >
                      {data.projects.viewSite}
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
