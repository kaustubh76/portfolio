import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  const handleMouse = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize  text-xl font-semibold hover:underline ">
        {title}
      </h2>
      <motion.img
        style={{ x: x, y: y }}
        fetchpriority="high"
        ref={imgRef}
        src={img}
        alt={title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        className=" z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden "
      />
    </Link>
  );
};

const Post = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between text-dark first:mt-0 
    border border-solid border-dark 
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
const FeaturedPost = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-dark rounded-2xl dark:border-light dark:bg-dark ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl " />

      <Link
        href={link}
        target={"_blank"}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <motion.img
          fetchpriority="high"
          src={img}
          alt={title}
          className="w-full h-[50vh] p-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-primaryDark">{summary}</p>
      <span className=" ">{time}</span>
    </li>
  );
};
const posts = () => {
  return (
    <>
      <Head>
        <title>Sourabh Joshi | Posts Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words can Change the World"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-col-1 sm:flex sm:flex-col ">
            <FeaturedPost
              title="Counselling Cell App Post"
              summary={
                "The LNMIIT Counselling and Guidance Cell is pleased to share with you the most recent update of the C-Cell app. We have added more elements to make it trouble-free for the pupils after months of diligent work and mental ruminating."
              }
              time="November 2022"
              link="https://www.linkedin.com/posts/sourabh-joshi-0299141b9_great-is-the-art-of-beginning-but-greater-activity-6997810558716514304-hAJa?utm_source=share&utm_medium=member_desktop"
              img="/images/projects/post1.jpeg"
            />
            <FeaturedPost
              title="Stem Warrior Hacks Winner"
              summary={
                "GitEctive is a Robust Smart Tool For Hackathon Project evaluators, able to do Analysis & Plagiarism check of Github repos , just from repo link!"
              }
              time="January 2022"
              link="https://www.linkedin.com/posts/sourabh-joshi-0299141b9_won-our-first-ever-international-hackathon-activity-6884930828145590272-srWc?utm_source=share&utm_medium=member_desktop"
              img="/images/projects/gitective.png"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Posts
          </h2>
          <ul>
            <Post
              title="Counselling Cell App Post"
              date="November 2022"
              img="/images/projects/post1.jpeg"
              link="https://www.linkedin.com/posts/sourabh-joshi-0299141b9_great-is-the-art-of-beginning-but-greater-activity-6997810558716514304-hAJa?utm_source=share&utm_medium=member_desktop"
            />
            <Post
              title="Hack36 Winner"
              date="April 2022"
              img="/images/projects/post2.jpeg"
              link="https://www.linkedin.com/posts/sourabh-joshi-0299141b9_unchainthehacks-mnnit-hack36-activity-6924635195518173184-KoPW?utm_source=share&utm_medium=member_desktop"
            />
            <Post
              title="Stem Warrior Hacks Winner!"
              date="January 2022"
              img="/images/projects/gitective.png"
              link="https://www.linkedin.com/posts/sourabh-joshi-0299141b9_won-our-first-ever-international-hackathon-activity-6884930828145590272-srWc?utm_source=share&utm_medium=member_desktop"
            />
            
            <Post
              title="Hack-It-Out Winner!"
              date="October 2021"
              img="/images/projects/post4.jpeg"
              link="https://www.linkedin.com/posts/sourabh-joshi-0299141b9_extremely-elated-to-share-we-won-first-position-activity-6855557959427211264-B9Wm?utm_source=share&utm_medium=member_desktop"
            />
            <Post
              title="Yeah'21 Winner"
              date="August 2021"
              img="/images/projects/post5.jpeg"
              link="https://www.linkedin.com/posts/sourabh-joshi-0299141b9_innovation-learning-team-activity-6835809342147706880-usBR?utm_source=share&utm_medium=member_desktop"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default posts;
