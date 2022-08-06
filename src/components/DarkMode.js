import React from "react";

const DarkMode = () => {
  const dark = () => {};
  return (
    <div className="dark-mode">
      <button>
        <i className="fas fa-moon"></i>
      </button>
      <button>
        <i className="fas fa-sun"></i>
      </button>
    </div>
  );
};

export default DarkMode;
