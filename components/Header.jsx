import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <header>
      <div className="header">
        <li>
          <Link href="/Notice">NOTICE</Link>
        </li>

        <li>
          <Link href="/World">WORLD</Link>
        </li>

        {/* <li>
          <Link href="/Home">
            <img src="/img/logo.png" />
          </Link>
        </li> */}

        <li>
          <Link href="/System">SYSTEM</Link>
        </li>

        <li>
          <Link href="/Member">MEMBER</Link>
        </li>
      </div>
    </header>
  );
}
