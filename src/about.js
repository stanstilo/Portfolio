import React from "react";
import sitme from "./img/sitme.jpg";
import laptop from "./img/unnamed.png"

const About = () => {
   
  return (
    <div className="about about-container">
      <div
        className="about-img-bg"
        style={{ background: `url(${laptop})` }}
      ></div>
      <div className="stack-container">
        <h2 className="about-title d-flex justify-content-center mt-3">
          About Me & Stack
        </h2>
        <p className="describe">
          I'm a motivated front end Developer with great passion for building
          excellent softwares. I also know a bit of Nodejs and Express for
          backend development. I build fun stuffs that meets expectations and
          goals. My most notable skills include:
        </p>
        <div className='d-flex justify-content-center flex-column all-button-container'>
        <div className="button-row-1 mx-auto px-4">
          <button className="button-col">#Html</button>
          <button className="button-col">#CSS</button>
          <button className="button-col">#JavaScrit</button>
          <button className="button-col">#Sass</button>
          <button className="button-col">#Figma</button>
          <button className="button-col">#Bootstrap</button>
        </div>
        <div className="button-row-2 mx-auto px-4 mt-2">
          <button className="button-col">#RestApi</button>
          <button className="button-col">#Reactjs</button>
          <button className="button-col">#Nodejs</button>
          <button className="button-col">#Express</button>
          <button className="button-col">#Redux</button>
        </div>
        <div className="button-row-3 mx-auto px-4 mt-2">
          <button className="button-col">#Git & Github</button>
          <button className="button-col">#Heroku</button>
          <button className="button-col">#PostgresSQL</button>
          <button className="button-col">#MongoDb</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;