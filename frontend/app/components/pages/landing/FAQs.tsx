"use client";

import faqData from "@/data/faq";
import FAQ from "./FAQ";

export default function FAQs() {
  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 === 1);

  return (
    <section id="faqs" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {leftColumn.map(({ question, answer }, index) => (
            <FAQ key={index} question={question} answer={answer} />
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {rightColumn.map(({ question, answer }, index) => (
            <FAQ key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}