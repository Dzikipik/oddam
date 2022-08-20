import React from "react";
import { NavLink } from "react-router-dom";

type Props = {text: string; link: string;};

const LinkScrollTo = ({ text, link }: Props) => {
  return (
    <li className="navigation-li">
      <NavLink to={`/#${link}`} className="linkScrollTo-a">
        {text}
      </NavLink>
    </li>
  );
};

export default LinkScrollTo;