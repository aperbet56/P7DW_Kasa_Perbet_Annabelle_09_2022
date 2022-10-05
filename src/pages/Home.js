import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
