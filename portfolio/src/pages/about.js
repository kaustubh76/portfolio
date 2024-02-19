import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Layout from "@/components/Layout";
// import ParticleComponent from "@/components/ParticleComponent";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import axios from "axios";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import profilepic from "../../public/images/profilepic.jpeg";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springvalue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springvalue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springvalue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  const [profilePic, setprofilepic] = useState("");
  const url = "https://api.github.com/users/kaustubh76";
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log("-response--->", res);
      setprofilepic(res.data.avatar_url);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Kaushtubh Agrawal | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Ignites Purpose! "}
            className="mb-16 lg:!text-7xl 
          sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4  md:order-2 md:col-span-8 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>

              <p className="font-medium">
                As a full-stack Web developer, I have a strong command over the
                latest technologies like Node.js, React.js, and Typescript. My
                expertise in these technologies enables me to develop
                high-quality, responsive web applications that cater to the
                diverse needs of clients.
              </p>
              <p className="font-medium my-4">
                I believe that a product is about more than just making things
                look pretty . I approach,design and develop a product from a
                problem-solving perspective, leveraging my knowledge of user
                behavior and industry trends to create applications that are
                both aesthetically pleasing and highly functional.
              </p>
              <p className="font-medium">
                Whether I am working on a website, or other digital product, I
                bring my commitment to user experience and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div
              className=" dark:bg-dark dark:border-light col-span-3 relative h-max rounded-3xl border-2 
            border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 "
            >
              <div
                className="absolute top-0 -right-3 -z-10 
              w-[102%] h-[103%] rounded-[2rem] bg-dark 
              dark:bg-light "
              />
              <img
                fetchpriority="high"
                src={profilePic}
                alt="profile pic"
                className="w-full h-auto bg-dark rounded-3xl  "
              />
            </div>
          </div>
          <Skills />
          
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
