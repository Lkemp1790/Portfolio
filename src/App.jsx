import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./test";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>

    </div>
    )
};

export default App;
