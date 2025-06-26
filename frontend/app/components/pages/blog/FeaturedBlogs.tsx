import { getAllBlogs } from "@/lib/blogs";
import BlogCard from "./BlogCard";
import { BlogProps } from "@/types/blog";

export default async function FeaturedBlogs() {
  const blogs = await getAllBlogs();

  const featuredBlogs = blogs
    .filter((b): b is BlogProps => !!b.createdAt)
    .sort((a,b) => new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime())
    .slice(0, 3);

  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}