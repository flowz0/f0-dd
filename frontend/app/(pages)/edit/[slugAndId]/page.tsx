import Header from "@/app/components/Header";
import EditBlogForm from "@/app/components/pages/dashboard/EditBlogForm";
import { getAllBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ slugAndId: string }> }) {
  const { slugAndId } = await params;
  const id = slugAndId.split("-").pop();

  const blogs = await getAllBlogs();
  const blog = blogs.find((b) => b._id === id);

  if (!blog) return notFound();

  return (
    <main className="mb-16">
      <Header subtitle="Need to make any changes to the blog? Edit the blog and save for changes to be applied.">
        Edit blog
      </Header>
      <EditBlogForm initialData={blog} />
    </main>
  );
}