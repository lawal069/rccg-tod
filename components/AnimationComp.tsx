"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const AnimationComp = () => {
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
      className="w-full flex flex-col gap-10 justify-center items-center"
    >
      <motion.div variants={childTopVariants} className="lg:w-[500px] h-[146px] relative">
        <Image
          src="/rings/HumanKind.svg"
          alt=""
          fill
          className="object-contain w-auto absolute"
        />
      </motion.div>

      <div className="w-full gap-10 flex justify-center items-center">
        <motion.div
          variants={childVariants}
          className="w-[225px] h-[371px] relative"
        >
          <Image
            src="/rings/people.svg"
            alt=""
            fill
            className="object-cover w-auto absolute"
          />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="w-[225px] h-[371px] relative"
        >
          <Image
            src="/rings/purpose.svg"
            alt=""
            fill
            className="object-cover w-auto absolute"
          />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="w-[225px] h-[371px] relative"
        >
          <Image
            src="/rings/participation.svg"
            alt=""
            fill
            className="object-cover w-auto absolute"
          />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="w-[225px] h-[371px] relative"
        >
          <Image
            src="/rings/populism.svg"
            alt=""
            fill
            className="object-cover w-auto absolute"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimationComp;

const containerVariants = {
  hidden: {
    opacity: 0,
    // x: '100vw'
  },

  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
    //   duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 2,
    },
  },
};

const childTopVariants = {
  hidden: { opacity: 0, y: -500 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", damping: 17, mass: 2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 500 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", damping: 17, mass: 2 } },
};
