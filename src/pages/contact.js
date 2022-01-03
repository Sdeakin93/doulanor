import * as React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";

const ContactPage = () => {
  return (
    <main className="page">
      <Nav />

      <div className="container">
        <h2>Get in Touch</h2>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Service:{" "}
              <select className="select">
                <option value="birth">Birth Doula</option>
                <option value="sibling">Sibling Care Doula</option>
                <option value="post">Postpartum Doula</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Location: <input type="text" name="location" />
            </label>
          </p>
          <p>
            <label>
              Estimated Due Date:{" "}
              <input type="text" name="Estimated Due Date" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <div class="center">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;
