import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import MoIndex from "../components/MoIndex";
import { Tween, Timeline } from "react-gsap";
import Link from "next/link";
import SwiperSlide from "../components/SwiperSlide";

export default function Home() {
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

  return (
    <article className="main">
      {/* <div className="homePCWrap">test</div> */}
      <SwiperSlide />
      <MoIndex />
    </article>
  );
}
