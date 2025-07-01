"use client";

import Header from "@/app/components/Header";
import CreateBlogForm from "@/app/components/pages/dashboard/CreateBlogForm";
// import { getToken } from "@/lib/auth";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function CreateBlogPage() {
  // const router = useRouter();

  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     router.push("/login");
  //     return;
  //   }
  // });

  return (
    <main className="mb-16">
      <Header subtitle="Create a blog post by filling out the following fields.">
        Post a blog
      </Header>
      <CreateBlogForm />
    </main>
  );
}