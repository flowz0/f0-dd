import Header from "@/app/components/Header";
import EditBlogForm from "@/app/components/pages/dashboard/EditBlogForm";
import { getBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ slugAndId: string }> }) {
  const { slugAndId } = await params;
  const id = slugAndId.split("-").pop();

  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id === id);

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