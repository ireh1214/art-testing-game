import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import MoIndex from "../components/MoIndex";
import { Tween, Timeline } from "react-gsap";
import Link from "next/link";

export default function Home() {
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

  return (
    <article className="main">
      <div className="homePCWrap">
        <Tween
          from={{ scale: 0 }}
          stagger={{ from: "center", amount: 1, grid: [3, 3] }}
          duration={1}
          delay={0.4}
          ease="elastic.out(2, 0.5)"
        >
          <div className="home-left">
            <ul className="left-stamp">
              <Timeline
                target={
                  <>
                    <li>
                      <img src="img/main-stamp.png" />
                      <span>ROOM</span>
                    </li>
                    <li>
                      <Link href="map/Main">
                        <a>
                          <img src="img/main-stamp.png" />
                          <span>MAP</span>
                        </a>
                      </Link>
                    </li>
                  </>
                }
              >
                <Tween
                  from={{ x: "-50px" }}
                  to={{ x: "0px" }}
                  target={0}
                  delay={4.4}
                />
                <Tween
                  from={{ x: "-50px" }}
                  to={{ x: "0px" }}
                  target={1}
                  delay={0.1}
                />
              </Timeline>
            </ul>
            <Tween from={{ x: "200px", opacity: 0 }} duration={3} delay={3}>
              <li className="left-stamping">
                <img src="img/stamping.png" />
              </li>
            </Tween>
          </div>
        </Tween>

        <div className="home-middle">
          <Tween
            from={{ y: "200px", opacity: 0 }}
            duration={2}
            delay={2.2}
            ease="elastic.out(0.2, 0.1)"
          >
            <li className="middle-schedule">
              <img src="img/schedule.png" />
            </li>
          </Tween>
          <Tween from={{ opacity: 0 }} delay={4} duration={8}>
            <li className="light">
              <img src="img/light.png" alt="light" />
            </li>
            <li className="light2">
              <img src="img/light.png" alt="light" />
            </li>
          </Tween>
          <div className="middle-row">
            <Tween
              from={{ x: "200px" }}
              stagger={0.2}
              delay={1.2}
              opacity={0}
              ease="elastic.out(0.2, 0.1)"
            >
              <li className="row-ac1 uk-inline">
                <img
                  src="img/ac-hover1.png"
                  style={{ cursor: "pointer" }}
                  className="ac1"
                />
              </li>
            </Tween>

            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                modal: "guideModal",
              }}
            >
              <img src="img/index-guide1.png" />
            </Modal>

            <Tween
              from={{ y: "200px" }}
              stagger={0.2}
              delay={1.5}
              opacity={0}
              ease="elastic.out(0.2, 0.1)"
            >
              <li className="row-ac2 uk-inline">
                <img src="img/ac-hover2.png" style={{ cursor: "pointer" }} />
              </li>
            </Tween>
          </div>
          <div className="middle-row-mascot">
            <Timeline
              target={
                <>
                  <li className="leftMascot">
                    <img src="img/mascot3.png" />
                  </li>
                  <li className="middleMascot">
                    <img src="img/mascot1.png" />
                  </li>
                  <li className="rightMascot">
                    <img src="img/mascot2.png" />
                  </li>
                </>
              }
            >
              <Tween
                from={{ scale: 0 }}
                duration={1}
                ease="elastic.out(1, 0.3)"
                target={0}
                delay={6}
              />
              <Tween
                from={{ scale: 0 }}
                duration={1}
                ease="elastic.out(1, 0.3)"
                target={2}
                delay={0.1}
              />
              <Tween
                from={{ scale: 0 }}
                duration={1}
                target={1}
                ease="elastic.out(1, 0.3)"
                delay={0.1}
              />
            </Timeline>
          </div>
        </div>

        <div className="home-right">
          <Tween
            from={{ x: "200px", rotation: 1200, opacity: 0 }}
            duration={2}
            ease="back.out(1.7)"
            delay={5.8}
          >
            <li className="right-twitter" style={{ cursor: "pointer" }}>
              <img
                src="img/twitter.png"
                onClick={() =>
                  window.open("https://twitter.com/error_is_GOTONG", "_blank")
                }
              />
            </li>
          </Tween>
          <Tween
            from={{ x: "-300px", opacity: 0 }}
            duration={3}
            delay={3}
            ease="back.out(1.7)"
          >
            <li className="right-kirring">
              <img src="img/kirring.png" />
            </li>
          </Tween>

          <Tween
            from={{ scale: 0, opacity: 0 }}
            duration={2}
            delay={11}
            ease="back.out(1.7)"
          >
            <li className="right-search">
              <img src="img/search.png" />
            </li>
          </Tween>

          <Tween
            from={{ x: "-300px", opacity: 0 }}
            duration={3}
            delay={3}
            ease="back.out(1.7)"
          >
            <li className="right-newspaper">
              <img src="img/newspaper.png" />
            </li>
          </Tween>
        </div>
      </div>

      <MoIndex />
    </article>
  );
}
