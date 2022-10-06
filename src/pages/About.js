import React from "react";
import Header from "../components/Header";
import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";
import Data from "../components/CollapseData";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <AboutBanner />
        <section className="about__collapse">
          {Data.map((item, index) => (
            <Collapse title={item.title} content={item.content} key={index} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
