import BlogFeatures from "@/app/components/pages/blog/BlogFeatures";
import Image from "next/image";
import PlaceholderImg from "@/public/1920x1080.svg";
import CTA from "@/app/components/CTA";
import FeaturedBlogs from "@/app/components/pages/blog/FeaturedBlogs";
import { getBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }: { params: Promise<{ slugAndId: string }> }) {
  const { slugAndId } = await params;
  const id = slugAndId.split("-").pop();

  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound();

  return (
    <>
      <article className="pt-32 px-6 max-w-7xl mx-auto lg:pt-40">
        <header>
          <h1 className="text-4xl max-w-4xl mx-auto font-semibold text-center sm:text-5xl">
            {blog.title}
          </h1>
          <BlogFeatures
            author={blog.author!}
            date={blog.createdAt!}
            readTime={blog.readTime}
          />
          <Image
            src={blog.img || PlaceholderImg}
            alt={`${blog.title} blog image`}
            className="mt-12 h-full w-auto object-cover rounded-lg md:mt-16"
            draggable={false}
          />
        </header>
        <section className="mt-8 max-w-2xl mx-auto md:mt-12">
          <p>
            {blog.summary}
          </p>
        </section>
        <section className="mt-8 max-w-2xl mx-auto md:mt-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {blog.header}
          </h2>
          <p className="mt-4">
            {blog.paragraph}
          </p>
        </section>
        <section className="mt-8 max-w-2xl mx-auto md:mt-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {blog.header2}
          </h2>
          <p className="mt-4">
            {blog.paragraph2}
          </p>
        </section>
      </article>
      <div className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold md:text-3xl">Other Blogs</h2>
        <FeaturedBlogs />
      </div>
      <CTA />
    </>
  );
}