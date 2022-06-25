import React from "react";
import Link from "next/link";

export default function FloorMain() {
  const Swal = require("sweetalert2");

  const Point1 = () => {
    Swal.fire("방1", "어라! 아무도 없다.");
  };

  const Point2 = () => {
    Swal.fire("방2", "짜잔, 이 곳은 멋진 그림들이 가득합니다!");
  };

  return (
    <div className="FloorMain mapMain">
      <h1>로비</h1>
      <br />
      <br />
      <img src="../img/mascot5.png" alt="map" />

      <p className="MapButtonWrap">
        <button className="uk-button" onClick={Point1}>
          방1을 살펴볼까?
        </button>
        <button className="uk-button" onClick={Point2}>
          방2를 살펴볼까?
        </button>

        <Link href="/map/Main">
          <a>
            <button className="uk-button uk-button-secondary">뒤로</button>
          </a>
        </Link>
      </p>
    </div>
  );
}
