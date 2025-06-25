import { FAQProps } from "@/types/faq";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ({ question, answer }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] py-6 px-7 w-full h-fit rounded-lg cursor-pointer"
    >
      <h3 className="flex items-center justify-between gap-4">
        <span className="text-[#333333] font-semibold text-lg text-start">{question}</span>
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <FaPlus className="text-[#333333] w-4 h-4" />
        </span>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#333333] mt-4 text-start text-base/[1.6rem]"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}