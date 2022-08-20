import React from "react";
import Navigation from "./Navigation";
import HeroImage from "./HeroImage";
import HeroIntro from "./HeroIntro";

const HomeHeader = () => {
  return (
    <header id="start" className="homeheader">
      <Navigation />
      <HeroImage />
      <HeroIntro />
    </header>
  );
}

export default HomeHeader;