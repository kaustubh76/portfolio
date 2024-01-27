import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] flex flex-col mx-auto items-center justify-between 
    md:w-[80%]
    "
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            className="capitalize dark:text-primaryDark text-primary "
            href={companyLink}
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md: text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative
       lg:w-[90%] md:w-full
       "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
        md:w-[2px] md:left-[30px] xs:left-[20px] "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="9AI"
            companyLink="https://9ai.in/"
            time="1 june 2022- 5 june 2023"
            address="Udaipur Rajasthan"
            work="Integration APIs:
            - APIs implemented for creating and updating orders.  
            - Allows customers to track order status.
            2. Meta Webhook Configuration:
            - Configured webhook to receive real-time updates.
            - Ensures instant notifications for events.
            3. Salla/Shopify Webhooks:
            - Included skeletons for Salla and Shopify webhooks.
            - Provides customization options for integration. 
            Chatbot Builder:
  - Merchants can customize the chatbot flow after the static base node handling."
          />
           <Details
            position="Full stack Web/App Developer"
            company="Freelance(Self)"
            companyLink="#"
            time="6 months "
            address="Remote"
            work="Working on individual freelace projects related to web as well as App . experienced to work in a team for collaboration or contract based project "
          />
          <Details
            position="Data & AI intern (FRT)"
            company="Microsoft"
            companyLink="https://futurereadytalent.in"
            time="Sep 2021-Jan 2022"
            address="Remote"
            work="Future Ready Talent is a virtual internship platform with an opportunity to 
            learn the in-demand azure cloud & security skills aligned to industry needs. 
            The program aims at preparing learners work towards solving business challenges and 
            creating innovative solutions using the power of Microsoft Azure & GitHub tools."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
