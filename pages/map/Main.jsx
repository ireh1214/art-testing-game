import React from "react";
import Link from "next/link";
import { Tween, Timeline } from "react-gsap";

export default function Main() {
  return (
    <div className="mapMain">
      <Tween
        from={{ scale: 0 }}
        duration={1}
        ease="elastic.out(1, 0.6)"
        target={0}
        delay={0.2}
      >
        <div className="mapMainCont">
          <img src="../img/mapFirst.png" alt="castle" />
          <Tween from={{ x: "-200px", opacity: 0 }} duration={1} delay={0.6}>
            <h4>현재 열려있는 층</h4>
          </Tween>
          <Tween from={{ x: "200px", opacity: 0 }} duration={1} delay={0.8}>
            <h1>메인 홀</h1>
          </Tween>
        </div>
      </Tween>

      <Tween from={{ opacity: 0 }} duration={1} delay={1.8}>
        <div className="mapButtonCont">
          <button className="uk-button uk-button-secondary">
            <Link href="/map/FloorMain">
              <a>메인 홀</a>
            </Link>
          </button>
          <button className="uk-button uk-button-secondary">???</button>
        </div>
      </Tween>

      <img className="ink" src="../img/mapFirst-2.png" alt="ink" />
    </div>
  );
}
