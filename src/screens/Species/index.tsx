import React from "react";
import Slider from "../../components/Slider";
import {  slides } from "../../consts";
import Slide from "./Slides/Slide";



function Species() {
  return (
    <div className="species">

      <div className = 'container hidden-flex'>
      {/* <Circles generateLink = {generateLink} /> */}
      <Slider slides =  {slides}  component = {Slide} />
      <h2 className="container-title">
       <strong> Lorem ipsum</strong> dolor ut elit <br /> amet, consectetur sit
      </h2>
      <div
        className='gradiant-text'
      >
        <p><strong>Lorem ipsum</strong> dolor sit amet,</p>
        <p>consectetur adipiscing elit ut lorem,</p>
        <p>purus sit amet luctus venenatis</p>
      </div>
      </div>
    </div>
  );
}

export default Species;
