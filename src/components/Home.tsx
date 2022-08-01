import React from "react";
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import Helping from './Helping';
import ContactField from './ContactField';
import Footer from './Footer';


export default function Home() {
  return (
    <div id="home" style={{ position: "relative" }}>
            <HomeHeader />
            <HomeThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <Helping />
            <ContactField />
            <Footer />

    </div>
  );
}
