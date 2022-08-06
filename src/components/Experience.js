import React, { useState } from "react";
import Modal from "./Modal";
import Navigation from "./Navigation";
// import DarkMode from "../../src/components/DarkMode";

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="experience">
      <Navigation />
      {/* <DarkMode /> */}
      <div className="experienceContent">
        <div className="container">
          <div className="card">
            <div className="box" id="airport">
              <div className="content">
                <h2>2018</h2>
                <h3>airport staff</h3>

                <button
                  className="openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  read more
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box" id="fret">
              <div className="content">
                <h2>2019</h2>
                <h3>DHL fret</h3>

                <button
                  className="openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  read more
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box" id="amz">
              <div className="content">
                <h2>2020</h2>
                <h3>Amazon manager</h3>

                <button
                  className="openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  read more
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box" id="acd">
              <div className="content">
                <h2>2021</h2>
                <h3>3W Academy</h3>

                <button
                  className="openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default Experience;
