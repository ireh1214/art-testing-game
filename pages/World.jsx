import React from "react";
import SliderWorld from "../components/SliderWorld";
import { Tween } from "react-gsap";

export default function World() {
  return (
    <div className="worldWrap">
      <Tween
        from={{ y: "5vh", opacity: 0 }}
        duration={3}
        ease="elastic.out(1, 0.5)"
        delay={0.5}
      >
        <img className="worldTitle" src="img/world.png" width="180px" />
      </Tween>
      <br />
      <br />
      <br />
      현재는 열람할 수 없어요!
      {/* <SliderWorld /> */}
      <img className="bottomMascot" src="img/mascot7.png" />
    </div>
  );
}
