import { useEffect, useState } from "react";
import useSwitchState from "./hooks/useSwitchState";

import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { tr } from "./data/tr";
import { eng } from "./data/eng";

import "./App.css";

function App() {
  const [theme, handleThemeChange] = useSwitchState("theme", false);
  const [language, handleLanguageChange] = useSwitchState("lang", false);
  const [data, setData] = useState(eng);

  useEffect(() => {
    setData(language ? tr : eng);
  }, [language]);

  return (
    <div className={"App " + (theme ? "dark" : "")}>
      <Header
        theme={theme}
        language={language}
        data={data}
        handleThemeChange={handleThemeChange}
        handleLanguageChange={handleLanguageChange}
      />
      <main>
        <Home data={data} />
        <Skills data={data} />
        <Profile data={data} />
        <Projects language={language} data={data} />
        <Contact data={data} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
