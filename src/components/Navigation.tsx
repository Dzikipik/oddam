import React, { useState, useEffect } from 'react';
import LinkScrollTo from './LinkScrollTo';
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../dataBase/firebaseConfig";
import LinkRoute from './LinkRoute';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";



const Navigation = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedAcc, setLoggedAcc] = useState<string | null>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        setLoggedAcc(user.email);
      } else {
        setIsLogged(false);
      }
    });
  }, [isLogged]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLogged(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (

      <div className="navigation">
        {
          isLogged ? (
            
        <ul className="navigation-loginPanel">
          <li className="navigation-li">Cześć {loggedAcc}</li>
          <LinkRoute text="Oddaj rzeczy" link="/giveform" />
          <li className="navigation-li">Załóż konto</li>
          <li>
          <Link className="navigation-li" onClick={logout} to="/logout">Wyloguj</Link>
          </li>
        </ul>
          ) : (
            
        <ul className="navigation-loginPanel">
        <li className="navigation-li">Zaloguj</li>
        <li className="navigation-li">Załóż konto</li>
      </ul>
          )
        }
          <ul className="navigation-menu">
            <LinkScrollTo link="start" text="Start" />
            <LinkScrollTo link="homeThreeColumns" text="O co chodzi?" />
            <LinkScrollTo link="aboutUs" text="O nas" />
            <LinkScrollTo link="helping" text="Fundacja i organizacje" />
            <LinkScrollTo link="contactField" text="Kontakt" />
          </ul>
      </div>
      
    );
  }

  export default Navigation;