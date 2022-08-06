import React from "react";
import OtherSkils from "./OtherSkils";

const Languages = () => {
  return (
    <div className="languages">
      <div className="skill">
        <h1>Languages</h1>

        <li>
          <h3>html</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>
        <li>
          <h3>css</h3>
          <span className="bar">
            <span className="css"></span>
          </span>
        </li>
        <li>
          <h3>javascripte</h3>
          <span className="bar">
            <span className="javascript"></span>
          </span>
        </li>
        <li>
          <h3>react</h3>
          <span className="bar">
            <span className="react"></span>
          </span>
        </li>
        <li>
          <h3>php</h3>
          <span className="bar">
            <span className="php"></span>
          </span>
        </li>
        <li>
          <h3>laravel</h3>
          <span className="bar">
            <span className="laravel"></span>
          </span>
        </li>
      </div>

      {/* <OtherSkils /> */}
    </div>
  );
};

export default Languages;
