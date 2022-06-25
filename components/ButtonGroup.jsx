import React from "react";
import Link from "next/link";

export default function ButtonGroup(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="ButtonGroup">
      <button color="primary">
        <Link href={`/guest/${props.frontLink}`}>
          <a>←</a>
        </Link>
      </button>
      <button color="primary" onClick={scrollToTop}>
        TOP
      </button>
      <button color="primary">
        <Link href={`/guest/${props.backLink}`}>
          <a>→</a>
        </Link>
      </button>
    </footer>
  );
}
