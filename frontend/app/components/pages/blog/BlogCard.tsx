import Image from "next/image";

import PlaceholderImg from "@/public/1920x1080.svg";
import Link from "next/link";
import { BlogProps } from "@/types/blog";
import formatDate from "@/lib/formatDate";
import { FaLongArrowAltRight } from "react-icons/fa";

interface BlogCardProps {
  blog: BlogProps;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const url = `/blog/${blog._id}`

  return (
    <article
      className="max-w-full md:max-w-1/2 lg:max-w-1/3"
      aria-labelledby={`blog-title-${blog._id}`}
    >
      <Image
        src={blog.img || PlaceholderImg}
        alt={`${blog.title} blog image`}
        height={1920}
        width={1080}
        className="w-full h-64 object-cover rounded-lg shadow shadow-[hsl(0,0%,80%)]"
        loading="lazy"
      />
      <div className="mt-2 flex justify-between">
        <p className="text-sm">{blog.author}</p>
        <p className="text-sm">{formatDate(blog.createdAt!)}</p>
      </div>
      <div className="mt-2 flex flex-col">
        <h3 className="text-xl font-semibold line-clamp-1 md:text-2xl">
          {blog.title}
        </h3>
        <p className="mt-2 line-clamp-3">
          {blog.summary}
        </p>
        <Link href={url} className="bg-[#0080DB] text-[#E6E6E6] mt-6 w-fit py-2 px-4 rounded-md flex items-center gap-x-4 hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
          Read blog
          <FaLongArrowAltRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}