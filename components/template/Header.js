import { useEffect, useState } from "react";
import Container from "../UI/Container";
import Image from "next/image";

import Logo from "../../public/logo.png";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  const handleWindowResize = () => {
    if (window.innerWidth >= 768) {
      setNavToggle(false);
    }
  };

  const handleFixedNav = () => {
    if (window.scrollY >= 350) {
      setFixedNav(true);
    } else if (window.scrollY < 350) {
      setFixedNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleFixedNav);
    console.log("scroll");

    window.addEventListener("resize", handleWindowResize);
    console.log("resize");
  });

  return (
    <header
      className={` text-black mb-16 ${
        fixedNav
          ? "shadow-md fixed top-0 left-0 z-50 min-w-full sticky-effect "
          : "relative"
      }`}
    >
      <Container classes={"flex justify-between py-2.5"}>
        <Image src={Logo} width={50} height={50} alt="fake shop logo" />

        <div
          id="nav-toggle"
          className="relative cursor-pointer flex flex-col justify-center content-center lg:hidden z-50 w-8 "
          onClick={handleNavToggle}
        >
          <span
            className={`h-0.5 w-full bg-black ${
              navToggle
                ? "  rotate-45 absolute transition-transform"
                : " transition-transform"
            }`}
          ></span>
          <span
            className={` h-0.5 mt-2 w-full bg-black ${
              navToggle ? "hidden" : " "
            }`}
          ></span>
          <span
            className={` h-0.5 mt-2 w-full bg-black ${
              navToggle
                ? "  mt-0 -rotate-45 absolute transition-transform"
                : " transition-transform"
            }`}
          ></span>
        </div>
      </Container>
      <div
        id="mobile-nav"
        className={` flex flex-col gap-8 md:hidden absolute top-0 w-screen h-screen  px-5 py-2.5 transition-opacity duration-300 ease-in-out z-40 ${
          navToggle ? "opacity-1 transition-opacity" : "opacity-0 hidden"
        }`}
      >
        <nav></nav>
      </div>
    </header>
  );
}
