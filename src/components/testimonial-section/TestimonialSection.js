"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Container from "../Container";
import SectionDetails from "./SectionDetails";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Ethan Williams",
    role: "Digital Marketing Specialist",
    comment:
      "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    img: "/user-1.png",
  },
  {
    name: "Daniel Thompson",
    role: "Product Designer",
    comment:
      "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
    img: "/user-2.png",
  },
  {
    name: "Sophia Miller",
    role: "UX Strategist",
    comment:
      "Using this platform completely changed how I manage my payments. It’s smooth, intuitive, and perfectly transparent.",
    img: "/user-3.png",
  },
];

export default function TestimonialSection() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const next = () => {
    setIndex(([prev]) => [(prev + 1) % testimonials.length, 1]);
  };

  const prev = () => {
    setIndex(([prev]) => [(prev - 1 + testimonials.length) % testimonials.length, -1]);
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (direction) => ({ x: direction > 0 ? -200 : 200, opacity: 0, zIndex: 0 }),
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#F6F6F6] overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-20">

        <div className="relative z-100 text-center lg:text-left">
          <SectionDetails onNext={next} onPrev={prev} />
        </div>

        <div className="relative h-[370px] sm:h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute right-0 left-0 flex justify-center lg:justify-end px-4 sm:px-0"
            >
              <TestimonialCard card={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
