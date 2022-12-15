import React from "react";
import Link from "next/link";

export default function ProfileCard(props) {
  return (
    <div className="ProfileCard">
      <p className="flex justify-around items-center">
        <span className="font-black text-3xl text-yellow-400">15</span>&nbsp;
        <span>CR.NAME</span>
      </p>

      <Link href="/Member/ID1">
        <img src="../img/ch4.png" />
      </Link>
    </div>
  );
}
