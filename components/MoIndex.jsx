import React from "react";
import Link from "next/link";

export default function MoIndex() {
  return (
    <div className="homeMobileWrap">
      <p>
        손님, 메인 페이지는 <br /> 모바일에 최적화 되어있지 않습니다. <br />{" "}
        세부 페이지를 열람하시거나,
        <br /> PC로 접속해주시면 감사하겠습니다.
      </p>
      <img className="mobile-home-mascot" src="img/mascot5.png" />
    </div>
  );
}
