import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../container";
import menuIcon from "../../assets/images/menu.svg";
import { useScrollPosition } from "@/hooks/useScrollPosition";

type Props = {};

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Program",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "About us",
    path: "/",
  },
];

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  console.log({ scrollPosition });
  return (
    <div
      className={`bg-white shadow-nav w-full fixed left-0 top-0 sm:shadow-none ${
        scrollPosition > 12 ? "sm:bg-white sm:shadow-nav" : "sm:bg-transparent"
      } z-[999]`}
    >
      <Container modifierClasses="relative">
        <div
          className={`${
            scrollPosition > 12 ? "py-4" : "py-7"
          } px-1 flex justify-between items-center`}
        >
          <Link href="/">
            <div className="font-sg font-[400] text-xl flex items-center gap-1">
              <span className="py-1 px-2 text-white bg-primary-main rounded-xl shadow-3xl">
                Gym
              </span>
              <span className="text-primary-main">baran</span>
            </div>
          </Link>

          {/* for large screens */}
          <div className="hidden sm:flex justify-center items-center sm:gap-6 md:gap-10">
            <ul className="flex flex-col sm:flex-row sm:gap-5 md:gap-9">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:border-b">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button className="py-3 px-7 bg-primary-dark text-white rounded-xl shadow-3xl ">
              Log in
            </button>
          </div>

          {/* for tiny screens */}
          <div
            className="sm:hidden relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Image src={menuIcon} alt="menu-icon" />
          </div>
        </div>
        <ul
          className={`${
            open ? "block" : "hidden"
          } sm:hidden bg-white text-white absolute top-[100%] right-0 w-full xs:w-64 divide-y divide-primary-light/50`}
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-center py-6 px-8 text-xl w-full bg-primary-light"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Navbar;
