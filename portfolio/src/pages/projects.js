import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import editor from "../../public/images/projects/editor.png"
import portfolio from "../../public/images/projects/portfolio.png";
import Invoice from "../../public/images/projects/Invoice.png";
import mentalmiracle from "../../public/images/projects/mentalmiracle.png";
import rental from "../../public/images/projects/rental.png";
import quizmify from "../../public/images/projects/Quizmify.png";
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center relative justify-between rounded-br-2xl rounded-3xl  border border-solid
     border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl xs:-right sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          priority
          src={img}
          alt={title}
          className="w-full h-[50vh] "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium text-dark dark:text-light
        sm:text-sm 
        "
        >
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 
            text-lg dark:bg-light dark:text-dark  font-semibold
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center 
    rounded-2xl border border-solid 
    border-dark bg-light  p-6 relative dark:bg-dark dark:border-light 
    xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-[50vh] "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>

          <Link href={github} target={"_blank"} className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Kaushtubh Agrawal | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
            text="Imagination Trumps Knowledge!"
          />
          <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProject
                type="Professional Work"
                title="Editor-io Master"
                summary="Editor-io Master is an online code editor designed for frontend developers, allowing users to write, compile, and test HTML, CSS, and JavaScript code in real-time. With features like live preview, responsive design testing, and integrated readme file support, Editor-io Master offers a seamless environment for creating and showcasing frontend projects efficiently."
                img={editor}
                link="https://superlative-strudel-720a37.netlify.app/"
                github="https://github.com/kaustubh76/Editor-io-master"
              />
            </div>
            <div
              className="col-span-6
            sm:col-span-12
            "
            >
              <Project
                type="Personal Project"
                title="Invoice Generator- React App"
                summary="An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device."
                img={Invoice}
                link="https://invoice-generator-react.netlify.app/"
                github="https://github.com/kaustubh76/invoice-generator-project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                type="Personal Project"
                title="Kaushtubh's Portfolio Website"
                summary="Welcome to my Next.js-powered portfolio! I'm Kaushtubh Agrawal, a passionate web developer dedicated to crafting visually appealing and high-performance digital experiences. Explore my projects, read insightful blog posts, and let's connect to bring your ideas to life!"
                img={portfolio}
                link="https://personal-portfolio-nine-indol.vercel.app/"
                github="https://github.com/kaustubh76/portfolio"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Professional Work"
                title="Quizmify"
                summary="It is a full stack AI quiz platform with NextJS 13, TailwindCSS, OpenAI, Next Auth.

                quizmify."
                img={quizmify}
                link="https://quizmify.vercel.app/"
                github="https://github.com/kaustubh76/Quizmify"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                type="Personal Project"
                title="Go-car-rental Frontend"
                summary="It is frontend based project with "
                img={rental}
                link=""
                github="https://github.com/kaustubh76/Go-car-rental"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                type="Personal Project"
                title="Mental miracle"
                summary="It blends JavaScript-powered interactivity with an integrated chatbot for real-time engagement. Take personalized quizzes to receive tailored advice, making your online experience dynamic and insightful."
                img={mentalmiracle}
                link="https://mental-miracle.vercel.app/"
                github="https://github.com/kaustubh76/Mental-Miracle"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
