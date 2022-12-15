import React from "react";
import ProfileCard from "../components/ProfileCard";
import Link from "next/link";

export default function Member() {
  return (
    <div className=" m-auto text-white">
      <p className="pt-10 text-center">
        <li className="text-3xl font-black ">PROFILE</li>
        <li>프로필</li>
      </p>

      <div className="lg:w-[800px] m-auto px-20 py-10 flex justify-around flex-wrap">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}
