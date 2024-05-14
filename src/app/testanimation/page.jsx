"use client";

import { delay, motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 60,
    },
  };
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="w-96 h-96 bg-blue-500"
        initial={{ x: -100 }}
        variants={variants}
        animate="variant2"
        transition={{ delay: 2, duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
