"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { color, motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const bottonVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:20 xl:48 text-xl">
      <div className="hidden md:flex gap-4 font-semibold w-1/3">
        {/* LINKS */}
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white  mr-1">Alan</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        {/* SOCIALS */}
        <Link href="https://github.com/Alan-Isco">
          <Image src="/github.png" alt="logo" height={24} width={24} />
        </Link>
        <Link href="https://github.com/Alan-Isco">
          <Image src="/dribbble.png" alt="logo" height={24} width={24} />
        </Link>
        <Link href="https://github.com/Alan-Isco">
          <Image src="/instagram.png" alt="logo" height={24} width={24} />
        </Link>
        <Link href="https://github.com/Alan-Isco">
          <Image src="/facebook.png" alt="logo" height={24} width={24} />
        </Link>
        <Link href="https://github.com/Alan-Isco">
          <Image src="/pinterest.png" alt="logo" height={24} width={24} />
        </Link>
        <Link href="https://github.com/Alan-Isco">
          <Image src="/linkedin.png" alt="logo" height={24} width={24} />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* MENU BUTTON */}
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottonVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
      </div>

      {/* MENU LIST  */}

      {open && (
        <motion.div
          variants={listVariants}
          initial={"closed"}
          animate={"opened"}
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-40"
        >
          {links.map((link) => (
            <motion.div variants={listItemVariants} key={link.url} className="">
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
