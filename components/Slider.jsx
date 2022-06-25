import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

export default function Slider() {
  return (
    <AwesomeSlider animation="FoldOutAnimation" organicArrows={false}>
      <div>
        <img src="img/ch.jpeg" alt="m" />
      </div>
      {/* <div>111</div>
      <div>
        <p>222</p>
      </div> */}
    </AwesomeSlider>
  );
}
