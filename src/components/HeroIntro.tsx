import React from 'react';
import decor from "../assets/Decoration.svg";
import HeroImage from './HeroImage';

const HeroIntro = () => {
  
    return (
      <div className="herointro">
        <div className="herointro-title">
          Zacznij pomagać!
          Oddaj niechciane rzeczy w zaufane ręce
        </div>
        <img src={decor} className="decoration" alt="" />
        <div className="herointro-btns">
          <div className="herointro-btn">Oddaj rzeczy</div>
          <div className="herointro-btn">Zorganizuj zbiórkę</div>
        </div>
      </div>
    );
  }

  export default HeroIntro;