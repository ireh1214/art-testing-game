import React from "react";
import Link from "next/link";
import { Tween, Timeline } from "react-gsap";

export default function Guest() {
  return (
    <div className="GuestWrap">
      <Tween from={{ x: "200px", opacity: 0 }} duration={2} delay={0.4}>
        <h2>Guest list</h2>
      </Tween>
      <Tween from={{ y: "200px", opacity: 0 }} duration={1} delay={0.8}>
        <div className="GuestRow">
          <Link href="/guest/ID1">
            <a className="ch4">
              <img src="../img/ch1.png" />
            </a>
          </Link>
          <Link href="/guest/ID2">
            <a className="ch4">
              <img src="../img/../img/ch2.png" />
            </a>
          </Link>
          <Link href="/guest/ID3">
            <a>
              <img src="../img/../img/ch3.png" />
            </a>
          </Link>
          <Link href="/guest/ID4">
            <a className="ch3">
              <img src="../img/../img/ch4.png" />
            </a>
          </Link>
        </div>
      </Tween>
    </div>
  );
}
