import React from "react";
import Link from "next/link";

export default function MoIndex() {
  return (
    <div className="homeMobileWrap">
      <p>
        손님, 메인 페이지는 <br /> 모바일에 최적화 되어있지 않습니다. <br />{" "}
        세부 페이지를 열람하시거나,
        <br /> 아래 링크를 확인해주시면 감사하겠습니다.
      </p>
      <img className="mobile-home-mascot" src="img/mascot5.png" />
      <div>
        <span
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1w1SWwgkshVcBJpcrb16NRo9lhK8GrQiQ/view?usp=sharing",
              "_blank"
            )
          }
        >
          논파 폼 다운로드
        </span>
        <span
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1bs62mz3j0b9_4gRG5pKrUnjekaouWGFPr36itXmFyrs/edit?usp=sharing",
              "_blank"
            )
          }
        >
          조사&재판 가이드
        </span>
        <Link href="map/Main">
          <a>
            <span>맵으로 가자</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
