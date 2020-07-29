import React from "react";
import "./App.css";

function About() {
  return (
    <div className="App">
      <h1>Gallery</h1>
      <img src={require('./Phabian3.jpg')} alt="ceo of kibalitek"  height="282" width="282"/>
    <p> BWIRE PHABIANO
C.E O
Bwire is the CO-FOUNDER  and CEO of KIBALITEK.
He holds a Bachelor’s degree in science with Education (Busitema University), a Diploma in secondary Education- Biology/ Chemistry(Kyambogo university),  a Certificate in computer Education(Moi university Eldoret – Kenya) .
He started  the idea of computer programming  in March, 2019 with a friend called Joe living in the USA.
Bwire had taught and examined Bio/Chem for 10 years at secondary level.
He currently runs the project activities as the CEO.
</p>
    </div>
  );
}

export default About;
