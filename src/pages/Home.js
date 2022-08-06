import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="homeContainer">
          <h1>Full Stack développer</h1>
          <p>
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            labore dolore, commodi quod consectetur eum voluptatem optio
            mollitia reiciendis saepe."
          </p>
          <div className="icone-dev">
            <img
              src="/media/23735-html-5-logo-icon-vector-icon-vector-eps.png"
              alt="logo html"
            />
            <img
              src="/media/23771-css-3-layout-logo-icon-vector-icon-vector-eps.png"
              alt="logo css"
            />
            <img src="/media/black-js-logo-16.png" alt="logo js" />
            <img src="/media/react-1543566-1306069.png" alt="logo react" />
            <img src="/media/téléchargement.png" alt="logo php" />
            <img
              src="/media/151-1512242_laravel-black-icon-laravel-vs-codeigniter-hd-png.png"
              alt="logo laravel"
            />
          </div>
          <div className="pdf">
            <a href="/media/Mohamed_Dev.pdf" target="_blank">
              Télécharger pdf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
