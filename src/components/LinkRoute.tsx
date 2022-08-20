import React from "react";
import { Link } from "react-router-dom";


type Props = { text: string; link: string };

const LinkRoute = ({ text, link }: Props) => {
  return (
    <li className="linkRoute-li">
      <Link className="linkRoute-a" to={link}>
        {text}
      </Link>
    </li>
  );
};

export default LinkRoute;
