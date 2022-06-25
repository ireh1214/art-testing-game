import React from "react";
import { Tween } from "react-gsap";

export default function System() {
  return (
    <div className="noticeWrap">
      <Tween from={{ y: "-10vh", opacity: 0 }} duration={1} delay={0.4}>
        <p className="notice-frame">
          <img src="img/frame-2.png" />
        </p>
        <div className="noticePaper">
          <p className="notice-content">
            <br />
            <br />
            <Tween
              from={{ y: "5vh", opacity: 0 }}
              duration={3}
              ease="elastic.out(1, 0.5)"
              delay={1.5}
            >
              <h2>
                <img src="img/system.png" />
              </h2>
            </Tween>
            <br />
            <br />
            <span className="title">➢ 그림 교환 시스템</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati numquam atque accusamus quos eaque suscipit quas, ab
            ducimus tempore sint, voluptates molestiae quae, minus dolorem
            nesciunt id pariatur dicta.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati numquam atque accusamus quos eaque suscipit quas, ab
            ducimus tempore sint, voluptates molestiae quae, minus dolorem
            nesciunt id pariatur dicta.
            <br />
            <br />
            <span className="title">➢ 그림 판매 시스템</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati numquam atque accusamus quos eaque suscipit quas, ab
            ducimus tempore sint, voluptates molestiae quae, minus dolorem
            nesciunt id pariatur dicta.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati numquam atque accusamus quos eaque suscipit quas, ab
            ducimus tempore sint, voluptates molestiae quae, minus dolorem
            nesciunt id pariatur dicta.
            <br />
            <br />
            <span className="title">➢ 쉬는 날</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati numquam atque accusamus quos eaque suscipit quas, ab
            ducimus tempore sint, voluptates molestiae quae, minus dolorem
            nesciunt id pariatur dicta.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati numquam atque accusamus quos eaque suscipit quas, ab
            ducimus tempore sint, voluptates molestiae quae, minus dolorem
            nesciunt id pariatur dicta.
            <br />
            <br />
            <span className="title">➢ 주로 활성화되는 시간</span>
            <br />
            <span className="small">수요일 06:00~09:00</span> <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati numquam atque accusamus quos eaque suscipit quas, ab
            ducimus tempore sint, voluptates molestiae quae, minus dolorem
            nesciunt id pariatur dicta.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati numquam atque accusamus quos eaque suscipit quas, ab
            ducimus tempore sint, voluptates molestiae quae, minus dolorem
            nesciunt id pariatur dicta.
            <br />
            <br />
            <p className="notice-bottomStamp">
              <img src="img/stamp6.svg" width="300px" />
            </p>
          </p>
        </div>
      </Tween>
    </div>
  );
}
