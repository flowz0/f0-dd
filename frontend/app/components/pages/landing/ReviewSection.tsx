import { bottomRowReviews, topRowReviews } from "@/data/reviews";
import ReviewRow from "./ReviewRow";

export default function ReviewSection() {
  return (
    <section className="py-32 mx-auto relative">
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        What Our <span className="text-[#0080DB] font-bold">Customers</span> Are Saying
      </h2>
      <div className="mt-8 flex flex-col gap-2 relative">
        <ReviewRow reviews={topRowReviews} direction="right" />
        <ReviewRow reviews={bottomRowReviews} direction="left" />
      </div>
    </section>
  );
}