import React, { useState, useEffect } from 'react';

export default function Navigation() {

    return (

      <div className="navigation">
        <div className="navigation-loginPanel">
          <li className="navigation-li">Zaloguj</li>
          <li className="navigation-li">Załóż konto</li>
        </div>
          <div className="navigation-menu">
            <li className="navigation-li">Start</li>
            <li className="navigation-li">O co chodzi?</li>
            <li className="navigation-li">O nas</li>
            <li className="navigation-li">Fundacja i organizacje</li>
            <li className="navigation-li">Kontakt</li>
          </div>
      </div>
      
    );
  }