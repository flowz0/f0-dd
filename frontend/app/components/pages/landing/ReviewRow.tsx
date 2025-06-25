"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Review } from "@/data/reviews";
import ReviewCard from "./ReviewCard";
import { useRef } from "react";

interface Props {
  reviews: Review[];
  direction: "left" | "right";
}

export default function ReviewRow({ reviews, direction }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // adjust sensitivity
  });

  // Scroll transforms: top row moves right (x = positive), bottom row moves left (x = negative)
  const x = useTransform(scrollYProgress, [0, 1], direction === "left" ? ["0%", "20%"] : ["0%", "-20%"]);

  return (
    <div ref={containerRef} className="overflow-hidden relative">
      <motion.div
        style={{ x }}
        className={`flex gap-6 p-2 ${direction === "left" ? "flex-row-reverse" : "flex-row"}`}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} direction={direction} />
        ))}
      </motion.div>
    </div>
  );
}