import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { theme, language, data, handleThemeChange, handleLanguageChange } =
    props;
  return (
    <div className="bg-primary dark:bg-black pt-8 pb-32">
      <div className="w-2/3 mx-auto">
        <div className="flex justify-end text-sm font-bold tracking-wider text-togglePrimary mb-12">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme}
              className="sr-only peer"
              onClick={handleThemeChange}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3">
              {theme ? data.header.darkMode : data.header.lightMode}
            </span>
          </label>

          <span className="ml-3 mr-6">|</span>

          <button onClick={handleLanguageChange} className="tracking-wider">
            <span
              className={
                language ? "text-togglePrimary" : "text-toggleSecondary"
              }
            >
              {data.header.language1}
            </span>
            <span
              className={
                language ? "text-toggleSecondary" : "text-togglePrimary"
              }
            >
              {data.header.language2}
            </span>
          </button>
        </div>
        <nav className="flex justify-between items-center text-navPrimary font-medium">
          <div>
            <Link to="/">
              <button className="rounded-full bg-navBgH text-navH font-semibold text-2xl px-4 py-2 focus:outline-none transform rotate-45">
                H
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-20">
            <Link to="#skills">{data.nav.skills}</Link>
            {/* <Link to="#profile">{data.nav.profile}</Link> */}
            <Link to="#projects">{data.nav.projects}</Link>
            <Link to="#contact">
              {/* <button className="border-solid border-2 border-indigo-800 px-8 py-3 text-navHire"> */}
              <button className="btn px-1">{data.nav.hireMe}</button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
