import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LinkScrollTo from './LinkScrollTo';

const Navigation = () => {

    return (

      <div className="navigation">
        <div className="navigation-loginPanel">
          <li className="navigation-li">Zaloguj</li>
          <li className="navigation-li">Załóż konto</li>
        </div>
          <div className="navigation-menu">
            <LinkScrollTo link="start" text="Start" />
            <LinkScrollTo link="homeThreeColumns" text="O co chodzi?" />
            <LinkScrollTo link="aboutUs" text="O nas" />
            <LinkScrollTo link="helping" text="Fundacja i organizacje" />
            <LinkScrollTo link="contactField" text="Kontakt" />
          </div>
      </div>
      
    );
  }

  export default Navigation;