import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import {
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import { connect } from "http2";
import PastorCard from "./PastorCard";

const HomePage = () => {
  return (
    <div className="max-w-screen-xxl w-full mx-auto">
      {/* Welcome Section */}
      <section className="w-full bg-white px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
        <div className="w-[300px] lg:w-[400px] h-[320px] lg:h-[440px] bg-gray-800 rounded-2xl"></div>
        <div className="w-full lg:w-3/5">
          <div className="text-custom-black">
            <h1 className="font-bold text-3xl lg:text-5xl">
              Welcome to Tabernacle of David
            </h1>
            <h3 className="font-semibold text-base lg:text-2xl">
              The Place of His Presence
            </h3>
            <p className="py-6 text-secondary-black text-xs lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, corporis? Est dicta inventore amet dignissimos ipsam ut
              voluptatibus ullam aut in, tenetur veritatis impedit enim
              laboriosam ipsum cum optio fugit.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg lg:text-3xl font-semibold">
              Pastor Akinyemi
            </h3>
            <Link href="/" className="hover:text-btn-color underline">
              <p className="text-sm lg:text-xl">Learn more About us</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full bg-[url('/home/grass.svg')] px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
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
      <section className="w-full bg-[url('/home/graybg.svg')] px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
        <div className="flex flex-col text-custom-black justify-center items-center w-full gap-10">
          <h3 className="font-bold uppercase text-2xl lg:text-4xl border-l-4 px-2 border-primary-color">
            our pastors
          </h3>
          <PastorCard />
        </div>
      </section>

      {/* Services Time */}
      <section className="w-full bg-light-gray px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
        <div className="flex flex-col space-y-6 lg:space-y-14 justify-center items-center">
          <h3 className="font-bold uppercase text-2xl lg:text-4xl border-l-4 px-2 border-primary-color">
            services time
          </h3>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {Services.map((service, index) => (
              <Card
                key={index}
                className="py-10 lg:py-14 w-[250px] lg:w-[300px] border-none flex flex-col justify-center items-center duration-500 ease-in-out hover:scale-105"
              >
                <div className="w-[60px] lg:w-[90px] h-[60px] lg:h-[90px] rounded-full bg-white relative">
                  <Image
                    src={service.logo}
                    alt={service.service}
                    fill
                    className="absolute object-cover w-auto"
                  />
                </div>
                <div className="pt-6 flex flex-col gap-y-1 lg:gap-y-2">
                  <h3 className="text-xl lg:text-2xl text-primary-color font-bold uppercase text-center">
                    {service.service}
                  </h3>
                  <h3 className="text-base lg:text-xl text-custom-black font-semibold uppercase text-center">
                    {service.day}
                  </h3>
                  <h3 className="text-base lg:text-xl text-custom-black font-medium uppercase text-center">
                    {service.time}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect, Grow & Trive */}
      <section className="w-full bg-[url('/home/grass.svg')] px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:justify-center items-center gap-10">
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
      <section className="w-full bg-white px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
        <div className="flex flex-col text-custom-black justify-center items-center w-full lg:w-[700px] gap-4">
          <h3 className="font-bold uppercase text-2xl lg:text-4xl ">
            get in touch
          </h3>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

const Services = [
  {
    logo: "/home/hand.svg",
    service: "celebration service",
    day: "first sundays",
    time: "10:00am",
  },
  {
    logo: "/home/church.svg",
    service: "adult service",
    day: " second & last sundays",
    time: "10:00am",
  },
  {
    logo: "/home/fire.svg",
    service: "yaya service",
    day: "third sundays",
    time: "10:00am",
  },
  {
    logo: "/home/pray.svg",
    service: "digging deep",
    day: "third sundays",
    time: "10:00am",
  },
  {
    logo: "/home/love.svg",
    service: "faith clinic",
    day: "third sundays",
    time: "10:00am",
  },
];
const Connects = [
  {
    link: "",
    img: "",
    name: "young adults",
  },
  {
    link: "",
    img: "",
    name: "teenagers",
  },
  {
    link: "",
    img: "",
    name: "workers",
  },
  {
    link: "",
    img: "",
    name: "fellowhship",
  },
];
const Events = [
  {
    eventImage: "/img5.svg",
    eventName: "praise 24",
    eventDate: "10 november, 2024",
    eventTime: "9am - 9pm",
  },
  {
    eventImage: "/img5.svg",
    eventName: "mother's day",
    eventDate: "11 april, 2024",
    eventTime: "10am",
  },
  {
    eventImage: "/img5.svg",
    eventName: "father's day",
    eventDate: "11 april, 2024",
    eventTime: "10am",
  },
  {
    eventImage: "/img5.svg",
    eventName: "children's day",
    eventDate: "27 december, 2024",
    eventTime: "10am",
  },
  {
    eventImage: "/img5.svg",
    eventName: "easter",
    eventDate: "11 april, 2024",
    eventTime: "10am",
  },
  {
    eventImage: "/img5.svg",
    eventName: "christmas",
    eventDate: "11 april, 2024",
    eventTime: "10am",
  },
];