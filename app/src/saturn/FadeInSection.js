import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.6, delay }}
      exit={{ opacity: 0, y: 20 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
