import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="id">
          <div className="idContent">
            <img src="/media/pexels-vladislav-murashko-5990696.jpg" alt="" />
            <h3>Harrat Mohamed </h3>
          </div>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <Link to="/" activeClassName="navActive">
                <i className="fas fa-home"></i>
                <span> Accueil</span>
              </Link>
            </li>
            <li>
              <Link to="/competences" activeClassName="navActive">
                <i className="fas fa-mountain"></i>
                <span> Compétences</span>
              </Link>
            </li>
            <li>
              <Link to="/experience" activeClassName="navActive">
                <i className="fas fa-building"></i>
                <span> Expérience</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio" activeClassName="navActive">
                <i className="fas fa-images"></i>
                <span> Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span> Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mohamedharrat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
          <div className="signature">
            <p>Harrat mohamed - 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
