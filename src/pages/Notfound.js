import React from "react";

import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="notFound">
      <h3>Désolé cette page n'existe pas !</h3>
      <Link to="/" activeClassName="navActive">
        <i className="fas fa-home"></i>
        <span> Accueil</span>
      </Link>
    </div>
  );
};

export default Notfound;
