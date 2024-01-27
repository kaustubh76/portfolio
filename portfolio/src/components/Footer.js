import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid dark:text-light dark:border-light
     border-dark font-medium text-lg sm:text-base "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/kaushtubh-agrawal-650b40229/"
            target={"_blank"}
            className="underline"
          >
            {" "}
           Kaushtubh Agrawal
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/kaushtubh-agrawal-650b40229/"
          target={"_blank"}
          className="underline"
        >
          Lets Connect
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
