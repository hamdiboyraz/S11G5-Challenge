import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedIn.png";
import homepage from "../assets/homepage.jpg";

const Home = () => {
  return (
    <section>
      <div className="bg-primary dark:bg-black pb-32">
        <div className="w-2/3 mx-auto">
          <div className="flex justify-start items-center gap-2  mb-10">
            <hr className="w-24 h-px bg-indigo-800 border-none" />
            <span className="text-homeName font-medium"> Hamdi </span>
          </div>
          <div className="flex gap-16">
            <div>
              <div className="text-homeText font-bold text-7xl mb-10">
                <p>Creative thinker</p>
                <p>Minimalism lover</p>
              </div>

              <p className="text-lg w-[560px] text-navPrimary mb-10">
                Hi I'm Hamdi. I'm a full-stack developer. If you are looking for
                a Developer who to craft solid and scalable frontend and backend
                products with great user experiences. Let's shake hands with me.
              </p>

              <div className="flex gap-3">
                <button className="btn-fill px-1">Hire me</button>
                <a href="https://www.github.com/hamdiboyraz" target="_blank">
                  <button className="btn px-3 flex gap-3 ">
                    <img src={github} alt="github" />
                    Github
                  </button>
                </a>
                <a href="">
                  <button className="btn px-3 flex gap-3 ">
                    <img src={linkedin} alt="linkedin" />
                    Linkedin
                  </button>
                </a>
              </div>
            </div>
            <img
              src={homepage}
              alt=""
              width="450"
              height="250"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
