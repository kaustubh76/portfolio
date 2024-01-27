import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  InstagramIcon,
} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group:hover:w-full transition-[width] ease duration-300 ${
          router.asPath == href ? "w-full" : "w-0"
        }
        dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark 
      my-2
      `}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-light 
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath == href ? "w-full" : "w-0"}
        dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [mode, setmode] = useThemeSwitcher();
  const [isopen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isopen);
  };
  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light
    relative z-10  lg:px-16 md:px-12 sm:px-8 
    "
    >
      <button
        className="hidden flex-col justify-center items-center lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
           ${isopen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
          my-0.5 ${isopen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
          ${isopen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </button>
      <div
        className="w-full flex 
       justify-between items-center lg:hidden"
      >
        <nav>
          <CustomLink title="Home" href="/" className="mr-4" />
          <CustomLink title="About" href="/about" className="mx-4" />
          <CustomLink title="Projects" href="/projects" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/kaushtubh-agrawal-650b40229/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/kaustubh76"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          {/* <motion.a
            href="https://www.linkedin.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a> */}
          {/* <motion.a
            href="https://www.linkedin.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 "
          >
            <InstagramIcon/>
          </motion.a> */}
          <motion.a
            href="https://www.instagram.com/a_kaustubh_02/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 "
          >
            <InstagramIcon />
          </motion.a>
          {/* <motion.a
            href="https://www.linkedin.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <DribbbleIcon />
          </motion.a> */}
          <button
            onClick={() => setmode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center 
        justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-dark text-light"} `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isopen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw]  flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink
              title="Home"
              href="/"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              title="About"
              href="/about"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              title="Projects"
              href="/projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              title="Posts"
              href="/posts"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2 ">
            <motion.a
              href="https://www.linkedin.com/in/kaushtubh-agrawal-650b40229/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/kaustubh76"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            {/* <motion.a
              href="https://www.linkedin.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a> */}
            <motion.a
              href="https://www.instagram.com/a_kaustubh_02/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3  bg-pink-700   sm:mx-1"
            >
              <InstagramIcon />
            </motion.a>

            <button
              onClick={() => setmode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center 
        justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-dark text-light"} `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
