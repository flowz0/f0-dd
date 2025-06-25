import formatDate from "@/lib/formatDate";
import { FaUser, FaCalendarDays, FaClock } from "react-icons/fa6";

interface BlogFeaturesProps {
  author: string;
  date: string;
  readTime: string;
}

export default function BlogFeatures({author, date, readTime}: BlogFeaturesProps) {
  return (
    <section className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mt-8 md:gap-x-12">
      <div className="flex items-center gap-2.5">
        <FaUser className="text-[#0080DB] w-4 h-4" />
        <h4 className="font-semibold">
          {author}
        </h4>
      </div>
      <div className="flex items-center gap-2.5">
        <FaCalendarDays className="text-[#0080DB] w-4 h-4" />
        <p className="font-semibold">
          {formatDate(date)}
        </p>
      </div>
      <div className="flex items-center gap-2.5">
        <FaClock className="text-[#0080DB] w-4 h-4" />
        <p className="font-semibold">
          {readTime} min read
        </p>
      </div>
    </section>
  );
}