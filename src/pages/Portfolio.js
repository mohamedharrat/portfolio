import React from "react";
import Navigation from "../components/Navigation";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <div class="parent">
        <a
          href="https://harrat-mohamed-the-maroc.netlify.app"
          className="div1"
          target="_blank"
        ></a>
        <a
          href="https://harrat-mohamed-the-club.netlify.app"
          className="div2"
          target="_blank"
        ></a>
        <a
          href="https://harrat-mohamed-weater-app-js.netlify.app"
          className="div3"
          target="_blank"
        ></a>
        <a
          href="https://harrat-mohamed-reservation.netlify.app"
          className="div4"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default Portfolio;
