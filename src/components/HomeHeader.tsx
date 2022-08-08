import React from "react";
import Navigation from "./Navigation";
import HeroImage from "./HeroImage";
import HeroIntro from "./HeroIntro";

export default function HomeHeader() {
  return (
    <header id="start" className="homeheader">
      <Navigation />
      <HeroImage />
      <HeroIntro />
    </header>
  );
}