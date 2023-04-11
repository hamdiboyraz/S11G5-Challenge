import project1 from "../assets/projects/P1.png";
import project2 from "../assets/projects/P2.png";
import project3 from "../assets/projects/P3.png";

export const projects = {
  project1: {
    image: project1,
    name: "p1",
    text: {
      en: "project",
      tr: "proje",
    },
    tools: ["React", "Redux", "JavaScript"],
    links: ["githubp1", "sitep1"],
  },
  project2: {
    image: project2,
    name: "p2",
    text: {
      en: "project",
      tr: "proje",
    },
    tools: ["Vue", "JavaScript", "CSS"],
    links: ["githubp2", "sitep2"],
  },
  project3: {
    image: project3,
    name: "p3",
    text: {
      en: "project",
      tr: "proje",
    },
    tools: ["Angular", "TypeScript", "HTML"],
    links: ["githubp3", "sitep3"],
  },
};
