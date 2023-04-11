import React from "react";
import { projects } from "../data/projects";

const Projects = (props) => {
  const { language, data } = props;
  return (
    <section>
      <div className="bg-primary dark:bg-black pb-36">
        <div className="w-2/3 mx-auto">
          <h2 className="font-semibold text-5xl mb-9">
            {data.projects.projects}
          </h2>
          <div className="flex justify-between gap-24 mb-12">
            {Object.entries(projects).map(
              ([key, { image, text, tools, links }]) => (
                <div key={key}>
                  <img src={image} alt={key} className="mb-3" />
                  <p className="text-homeName font-medium text-2xl mb-3">
                    {key}
                  </p>
                  <p className="text-left mb-3">
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
                      className="text-navHire font-medium underline"
                    >
                      Github
                    </a>
                    <a
                      href={links[1]}
                      target="_blank"
                      className="text-navHire font-medium underline"
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
