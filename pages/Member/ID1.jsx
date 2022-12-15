import React from "react";
import Title from "../../components/Title";
import ButtonGroup from "../../components/ButtonGroup";
import db from "../../db/chracter.json";
import { Tween } from "react-gsap";
import Link from "next/link";

export default function ID1() {
  let CNum = 0;

  return (
    <div className="Wrap mt-10 text-white">
      <div className="text-center">
        <h6> {db.character[CNum].catchPhrase}</h6>
        <h2 className="text-2xl"> “ {db.character[CNum].award} ” </h2>
      </div>

      <article className=" block lg:flex lg:justify-center">
        <div className="w-[200px] mx-auto my-10 lg:m-0">
          <img src="../img/ch1.png" alt="ch" width="100%" />
        </div>

        <div className=" overflow-y-scroll y-[90vh] mx-6 mt-10 ">
          <p className="info text-center">
            <h4>{db.character[CNum].famous}</h4>
            <h4>{db.character[CNum].name} </h4>
            <h6>
              {db.character[CNum].age} | {db.character[CNum].height} |
              {db.character[CNum].tribe}
            </h6>

            <br />
            <hr />
            <br />
          </p>

          <p className="w-[600px] mt-4 mb-20 ">
            <Title cont="Num1" />
            <h3>A</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vel ex
            commodi numquam laborum. Dolore, magni obcaecati! Suscipit, quos in,
            deleniti itaque, esse sint at perspiciatis delectus exercitationem
            incidunt iste. Suscipit at eos magni nulla minus praesentium quae
            earum unde, quasi blanditiis culpa. error earum eius? Reprehenderit
            labore numquam qui ipsam officiis. Asperiores, nisi labore!
            <br />
            <br />
            <Title cont="Num2" />
            <h3>B</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vel ex
            commodi numquam laborum. Dolore, magni obcaecati! Suscipit, quos in,
            deleniti itaque, esse sint at perspiciatis delectus exercitationem
            incidunt iste. Suscipit at eos magni nulla minus praesentium quae
            earum unde, quasi blanditiis culpa. error earum eius? Reprehenderit
            labore numquam qui ipsam officiis. Asperiores, nisi labore!
            <br />
            <br />
            <Title cont="Num3" />
            <h3>C</h3>
            Suscipit at eos magni nulla minus praesentium quae earum unde, quasi
            blanditiis culpa. error earum eius? Reprehenderit labore numquam qui
            ipsam officiis. Asperiores, nisi labore!
            <Title cont="Num3" />
            <h3>C</h3>
            Suscipit at eos magni nulla minus praesentium quae earum unde, quasi
            blanditiis culpa. error earum eius? Reprehenderit labore numquam qui
            ipsam officiis. Asperiores, nisi labore!
            <Title cont="Num3" />
            <h3>C</h3>
            Suscipit at eos magni nulla minus praesentium quae earum unde, quasi
            blanditiis culpa. error earum eius? Reprehenderit labore numquam qui
            ipsam officiis. Asperiores, nisi labore!
            <Title cont="Num4" />
            <Title cont="Num1" />
            <h3>A</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vel ex
            commodi numquam laborum. Dolore, magni obcaecati! Suscipit, quos in,
            deleniti itaque, esse sint at perspiciatis delectus exercitationem
            incidunt iste. Suscipit at eos magni nulla minus praesentium quae
            earum unde, quasi blanditiis culpa. error earum eius? Reprehenderit
            labore numquam qui ipsam officiis. Asperiores, nisi labore!
            <br />
            <br />
            <Title cont="Num2" />
            <h3>B</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vel ex
            commodi numquam laborum. Dolore, magni obcaecati! Suscipit, quos in,
            deleniti itaque, esse sint at perspiciatis delectus exercitationem
            incidunt iste. Suscipit at eos magni nulla minus praesentium quae
            earum unde, quasi blanditiis culpa. error earum eius? Reprehenderit
            labore numquam qui ipsam officiis. Asperiores, nisi labore!
            <br />
            <br />
            <Title cont="Num3" />
            <h3>C</h3>
            Suscipit at eos magni nulla minus praesentium quae earum unde, quasi
            blanditiis culpa. error earum eius? Reprehenderit labore numquam qui
            ipsam officiis. Asperiores, nisi labore!
            <Title cont="Num3" />
            <h3>C</h3>
            Suscipit at eos magni nulla minus praesentium quae earum unde, quasi
            blanditiis culpa. error earum eius? Reprehenderit labore numquam qui
            ipsam officiis. Asperiores, nisi labore!
            {db.character[CNum].have}
          </p>
        </div>
      </article>
      {/* <ButtonGroup frontLink="ID20" backLink="ID2" /> */}
    </div>
  );
}
