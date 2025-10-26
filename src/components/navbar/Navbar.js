"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Container from "../Container";
import Button from "../shared/Button";
import Logo from "../shared/Logo";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const menu = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Security", href: "#" },
  { name: "Benefits", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      {/* <nav className="flex items-center justify-between pt-9 pb-6 relative"> */}
      <nav className="flex items-center justify-between pt-9 relative">

        <Logo />

        {/* menu */}
        <div className="hidden md:flex gap-3 mt-0.5">
          {menu.map((m) => (
            <NavLink key={m.name} href={m.href}>
              {m.name}
            </NavLink>
          ))}
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          {/* button */}
          <div className="hidden md:block">
            <Button>Contact Us</Button>
          </div>

          {/* hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl block md:hidden z-9999"
            aria-label="toggle menu"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <MobileMenu open={open} menu={menu} />
    </Container>
  );
}
