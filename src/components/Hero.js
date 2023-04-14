import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedIn.png";
import homepage from "../assets/homepage.jpg";

const Hero = (props) => {
  const { data } = props;
  return (
    <section>
      <div className="bg-primary dark:bg-black pb-32">
        <div className="w-2/3 mx-auto">
          <div className="flex justify-start items-center gap-2  mb-10">
            <hr className="w-24 h-px bg-indigo-800 border-none" />
            <span className="text-homeName font-medium"> Hamdi </span>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-start gap-16">
            <div className="md:w-1/2">
              <div className="text-homeText font-bold text-7xl mb-10">
                <p>{data.home.title1}</p>
                <p>{data.home.title2}</p>
              </div>

              <p className="text-lg w-[560px] text-navPrimary mb-10">
                {data.home.description}
              </p>

              <div className="flex flex-col items-center md:flex-row gap-3">
                <button className="btn-fill px-1">
                  <a href="#contact">{data.nav.hireMe}</a>
                </button>
                <a href="https://www.github.com/hamdiboyraz" target="_blank">
                  <button className="btn px-3 flex gap-3 ">
                    <img src={github} alt="github" />
                    Github
                  </button>
                </a>
                <a href="#">
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

export default Hero;
