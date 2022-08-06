import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <section class="contactContainer">
        <form action="#">
          <h2>Nous Contacter</h2>
          <div class="form-grid">
            <div>
              <label for="name">Nom</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div class="textarea">
              <label for="message">Message</label>
              <textarea id="message"></textarea>
            </div>
          </div>
          <input type="submit" class="button" />
        </form>
        <div className="infoContainer">
          <div className="info">
            <i className="fas fa-phone"></i>
            <h2>Phone</h2>
            <p>+21275861485</p>
          </div>
          <div className="info">
            <i class="fas fa-envelope"></i>
            <h2>E-mail</h2>
            <p>mohamedh.harrat@gmail.com</p>
          </div>
          {/* <div className="info">
            <i class="fas fa-flag"></i>
            <h2>Address</h2>
            180 avenue mohamed V mohammedia
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
