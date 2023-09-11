import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-[#021F34] px-8 md:px-14 lg:px-36 pb-10 pt-5 font-sans">
      <Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
