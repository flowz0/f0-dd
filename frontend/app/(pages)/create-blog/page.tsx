import Header from "@/app/components/Header";
import CreateBlogForm from "@/app/components/pages/dashboard/CreateBlogForm";

export default function CreateBlogPage() {
  return (
    <main className="mb-16">
      <Header subtitle="Create a blog post by filling out the following fields.">
        Post a blog
      </Header>
      <CreateBlogForm />
    </main>
  );
}