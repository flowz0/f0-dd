import Header from "@/app/components/Header";
import EditBlogForm from "@/app/components/pages/dashboard/EditBlogForm";
import { getBlogById } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const blog = await getBlogById(id);

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