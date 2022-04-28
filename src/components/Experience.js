import React from "react";
import Navigation from "./Navigation";

const Experience = () => {
  return (
    <div className="experience">
      <Navigation />
      <div className="experienceContent">
        <div className="container">
          <div className="card">
            <div className="box" id="airport">
              <div className="content">
                <h2>2018</h2>
                <h3>airport staff</h3>

                <a href="/">Read More</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box" id="fret">
              <div className="content">
                <h2>2019</h2>
                <h3>DHL fret</h3>

                <a href="/">Read More</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box" id="amz">
              <div className="content">
                <h2>2020</h2>
                <h3>Amazon manager</h3>

                <a href="/">Read More</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box" id="acd">
              <div className="content">
                <h2>2021</h2>
                <h3>3W Academy</h3>

                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
