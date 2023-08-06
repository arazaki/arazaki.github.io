import * as React from "react";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="portfolio">
        <Projects />
      </div>
      <Reviews />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
