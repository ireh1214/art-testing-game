import React from "react";
import Title from "../../components/Title";
import ButtonGroup from "../../components/ButtonGroup";
import db from "../../db/chracter.json";
import { Tween } from "react-gsap";
import Link from "next/link";

export default function One() {
  let CNum = 3;

  return (
    <div className="ImgContApp">
      <Tween from={{ x: "200px", opacity: 0 }} duration={1} delay={0.5}>
        <h6> {db.character[CNum].catchPhrase}</h6>
      </Tween>

      <Tween from={{ x: "200px", opacity: 0 }} duration={1} delay={0.7}>
        <h2> “ {db.character[CNum].award} ” </h2>
      </Tween>
      <article>
        <Tween
          from={{ y: "50px" }}
          stagger={0.2}
          duration={2}
          delay={2}
          opacity={0}
          ease="elastic.out(0.2, 0.1)"
        >
          <div className="CharacterIMG">
            <img
              src="../img/ch4.png"
              className="character"
              alt="chracterIMG"
              uk-tooltip="짜잔!"
            />
          </div>
        </Tween>
        <div className="characterCont">
          <img src="../img/frame.png" className="frame" />
          <p className="info">
            <h4>{db.character[CNum].famous}</h4>
            <h4>{db.character[CNum].name} </h4>
            <h6>
              {db.character[CNum].age} | {db.character[CNum].height} |
              {db.character[CNum].tribe}
            </h6>
            <hr />
          </p>
          <Tween from={{ opacity: 0 }} duration={2} delay={1}>
            <p className="textCont">
              <Title cont="이야기의 시작" />
              <h3>A</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vel
              ex commodi numquam laborum. Dolore, magni obcaecati! Suscipit,
              quos in, deleniti itaque, esse sint at perspiciatis delectus
              exercitationem incidunt iste. Suscipit at eos magni nulla minus
              praesentium quae earum unde, quasi blanditiis culpa. error earum
              eius? Reprehenderit labore numquam qui ipsam officiis. Asperiores,
              nisi labore!
              <br />
              <br />
              <Title cont="계속되는 이야기" />
              <h3>B</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vel
              ex commodi numquam laborum. Dolore, magni obcaecati! Suscipit,
              quos in, deleniti itaque, esse sint at perspiciatis delectus
              exercitationem incidunt iste. Suscipit at eos magni nulla minus
              praesentium quae earum unde, quasi blanditiis culpa. error earum
              eius? Reprehenderit labore numquam qui ipsam officiis. Asperiores,
              nisi labore!
              <br />
              <br />
              <Title cont="이야기의 끝" />
              <h3>C</h3>
              Suscipit at eos magni nulla minus praesentium quae earum unde,
              quasi blanditiis culpa. error earum eius? Reprehenderit labore
              numquam qui ipsam officiis. Asperiores, nisi labore!
              <Title cont="친구들의 소지품" />
              {db.character[CNum].have}
            </p>
          </Tween>
          <img src="../img/frame.png" className="frame" />
        </div>
      </article>
      <ButtonGroup frontLink="ID3" backLink="ID1" />
    </div>
  );
}
