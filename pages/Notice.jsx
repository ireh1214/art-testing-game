import React from "react";
import { Tween } from "react-gsap";

export default function Notice() {
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
                <img src="img/notice.png" />
              </h2>
            </Tween>
            <br />
            <br />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            <hr />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            0. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium explicabo a sunt voluptatibus non distinctio nam eaque
            quaerat voluptates incidunt.
            <span className="bold">
              Ex earum libero eveniet consectetur
            </span>{" "}
            suscipit quasi inventore, ab eaque.
            <br />
            <br />
            <p className="notice-bottomStamp">
              <img src="img/stamp.svg" width="300px" />
            </p>
          </p>
        </div>
      </Tween>
    </div>
  );
}
