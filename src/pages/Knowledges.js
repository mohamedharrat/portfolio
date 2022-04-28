import React from "react";
import Languages from "../components/knowledges/Languages";
import OtherSkils from "../components/knowledges/OtherSkils";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <div className="langue">
          <Languages />
        </div>
        <div className="other">
          <OtherSkils />
        </div>
      </div>
    </div>
  );
};

export default Knowledges;
