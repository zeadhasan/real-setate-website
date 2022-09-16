import React from "react";
import Recent from "./recent/Recent";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Awards from "./Awards/Awards";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
    </>
  );
};

export default Home;
