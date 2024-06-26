"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Typewriter from "typewriter-effect";

import { Events, Services, Connects } from "@/data/homeData";
import PastorWrapper from "./PastorWrapper";
import ContactPage from "./ContactPage";
import ServicesComponent from "./ServicesComponent";
import { motion, useAnimation, useInView } from "framer-motion";

const staggeredTexts = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    ease: "linear",
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 17,
      mass: 2,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const HomePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
      className="max-w-screen-xxl w-full mx-auto"
    >
      {/* Welcome Section */}
      <div className="w-full bg-white px-6 lg:px-16 py-20 lg:py-40 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
          className="w-[300px] lg:w-[400px] h-[320px] lg:h-[440px] bg-gray-800 rounded-2xl"
        ></motion.div>

        <div className="w-full lg:w-3/5">
          <div className="text-custom-black">
            <motion.div
              variants={staggeredTexts}
              className="font-bold text-3xl lg:text-7xl pb-2 lg:pb-6 text-center lg:text-left"
            >
              Welcome to <span className="text-btn-color">RCCG</span> Tabernacle
              of David
            </motion.div>

            <motion.div
              variants={staggeredTexts}
              className="font-semibold text-base lg:text-2xl text-primary-color"
            >
              <Typewriter
                options={{
                  strings: ["The Place of His Presence"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <motion.div
              variants={staggeredTexts}
              className="py-6 text-secondary-black text-xs lg:text-xl leading-5 lg:leading-8"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, corporis? Est dicta inventore amet dignissimos ipsam ut
              voluptatibus ullam aut in, tenetur veritatis impedit enim
              laboriosam ipsum cum optio fugit.
            </motion.div>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg lg:text-3xl font-semibold text-primary-color">
              Pastor Akinyemi
            </h3>
            <Link href="/about-us" className="hover:text-btn-color underline">
              <p className="text-sm lg:text-xl">Learn more About us</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="w-full bg-[url('/home/grass.svg')] px-6 lg:px-12 py-20 lg:py-40 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
        <div className="flex flex-col space-y-6 lg:space-y-14 justify-center items-center">
          <h3 className="font-bold uppercase text-2xl lg:text-4xl border-l-4 px-2 border-primary-color">
            Upcoming Events
          </h3>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {Events.map((event, index) => (
              <Card
                key={index}
                className="w-[250px] lg:w-[300px] h-[300px] lg:[350px] border-none flex flex-col justify-center items-center duration-500 ease-in-out hover:scale-105 rounded-none bg-light-gray"
              >
                <div className="flex flex-col w-full h-full">
                  <div className="w-full h-3/5 bg-gray-700 relative">
                    <Image
                      src={event.eventImage}
                      alt={event.eventName}
                      fill
                      className="w-auto object-cover absolute"
                    />
                  </div>
                  <div className="pt-2 flex flex-col gap-y-1 lg:gap-y-1">
                    <h3 className="text-xl lg:text-2xl text-btn-color font-bold uppercase text-center">
                      {event.eventName}
                    </h3>
                    <h3 className="text-sm lg:text-base text-custom-black font-semibold uppercase text-center">
                      {event.eventDate}
                    </h3>
                    <h3 className="text-sm lg:text-base text-custom-black font-medium uppercase text-center">
                      {event.eventTime}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Pastors */}
      <section className="w-full bg-[url('/home/graybg.svg')]">
        <PastorWrapper />
      </section>

      {/* Services Time */}
      <section className="w-full">
        <ServicesComponent />
      </section>

      {/* Connect, Grow & Trive */}
      <section className="w-full bg-[url('/home/grass.svg')] px-6 lg:px-12 py-20 lg:py-40 flex flex-col lg:justify-center items-center gap-10">
        <div className="flex flex-col text-light-gray justify-center items-center w-full lg:w-[700px] gap-4">
          <h3 className="font-bold uppercase text-2xl lg:text-4xl ">
            connect, grow & thrive
          </h3>
          <p className="text-center text-secondary-gray text-base lg:text-xl font-semibold">
            All of you,{" "}
            <span className="uppercase font-bold text-custom-black">
              together
            </span>
            , are the{" "}
            <span className="uppercase font-bold text-custom-black">one</span>{" "}
            body of Christ, and each one of you is a separate and necessary part
            of it. 1st Corinthians 12:27 (TLB)
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {Connects.map((connect, index) => (
            <Link href={connect.link} key={index}>
              <Card className="w-[200px] lg:w-[250px] h-[200px] lg:h-[300px] border-none flex flex-col justify-center duration-500 ease-in-out hover:scale-105 rounded-none">
                <div className="flex flex-col  w-full h-full  justify-between pb-4">
                  <div className="w-full h-4/5 bg-gray-700 relative">
                    <Image
                      src={connect.img}
                      alt={connect.name}
                      fill
                      className="w-auto object-cover absolute"
                    />
                  </div>
                  <h3 className="text-primary-color text-lg lg:text-2xl text-center uppercase font-bold">
                    {connect.name}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="w-full bg-light-gray px-6 lg:px-12 py-20 lg:py-40 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
        <div className="flex flex-col text-custom-black justify-center items-center w-full lg:w-[700px] gap-4">
          <h3 className="font-bold uppercase text-2xl lg:text-5xl ">
            get in touch
          </h3>
          <p className="font-bold uppercase text-base lg:text-lg">
            We'd love to hear from you
          </p>
          <div className="w-full">
            <ContactPage />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
