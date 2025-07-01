"use client";

import Header from "@/app/components/Header";
import DeleteBlogBtn from "@/app/components/pages/dashboard/DeleteBlogBtn";
import EditBlogBtn from "@/app/components/pages/dashboard/EditBlogBtn";
import formatDate from "@/lib/formatDate";
import slugify from "@/lib/slugify";
import { BlogProps } from "@/types/blog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFileCirclePlus } from "react-icons/fa6";
import api from "@/lib/api";
import axios from "axios";

export default function DashboardPage() {
  const [authorized, setAuthorized] = useState(false);
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("http://localhost:5001/api/auth/check", {
          withCredentials: true,
        });

        const blogsRes = await axios.get("http://localhost:5001/api/blogs", {
          withCredentials: true,
        });

        const sorted = blogsRes.data
          .filter((b: BlogProps) => !!b.createdAt)
          .sort(
            (a: BlogProps, b: BlogProps) =>
              new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
          );

        setBlogs(sorted);
        setAuthorized(true);
      } catch (error) {
        console.error("Unauthorized or error fetching blogs", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) return <div className="p-8 text-center">Loading dashboard...</div>;
  if (!authorized) return null;

  return (
    <main className="mb-16">
      <Header subtitle="Manage your blogs here. Create, view, update, or delete any blog.">
        Blog Dashboard
      </Header>
      <div className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] mx-6 px-6 py-8 max-w-7xl lg:mx-auto rounded-lg lg:px-20 lg:py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">All Blogs</h2>
          <Link
            href="/create-blog"
            className="text-[#0080DB] hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]"
          >
            <FaFileCirclePlus className="w-9 h-9" />
            <span className="sr-only">Create new blog</span>
          </Link>
        </div>

        {/* Desktop Table */}
        <div className="bg-[#ffffff] h-[412px] mt-6 overflow-x-auto overflow-y-scroll hidden sm:block">
          <table className="w-full table-auto">
            <thead className="text-[#333333]">
              <tr className="text-left text-sm">
                <th className="pb-4 max-w-[8rem] lg:max-w-[12rem]">Title</th>
                <th className="pb-4 max-w-[20rem] lg:max-w-[28rem]">Summary</th>
                <th className="pb-4 max-w-[12rem] lg:max-w-[16rem]">Date Created</th>
                <th className="pb-4 max-w-[8rem] lg:max-w-[16rem]">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-[hsl(0,0%,30%)]">
              {blogs.length > 0 ? (
                blogs.map((blog) => {
                  const id = `${blog._id}`;
                  return (
                    <tr key={blog._id} className="border-t">
                      <td className="py-4 pr-4 font-medium truncate max-w-[8rem] lg:pr-4 lg:max-w-[10rem]">
                        {blog.title}
                      </td>
                      <td className="py-4 pr-2 truncate max-w-[20rem] lg:max-w-[28rem] lg:pr-4">
                        {blog.summary}
                      </td>
                      <td className="py-4 pr-2 truncate max-w-[12rem] lg:max-w-[16rem] lg:pr-4">
                        {formatDate(blog.createdAt!)}
                      </td>
                      <td className="py-4 pr-2 flex items-center gap-2 max-w-[8rem] lg:max-w-[16rem] lg:pr-4">
                        <EditBlogBtn editHref={id} ariaLabel={blog.title} />
                        <DeleteBlogBtn deleteHref={id} ariaLabel={blog.title} />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="text-center pt-4">
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-4 h-[540px] pr-4 flex flex-col gap-y-6 overflow-y-clip sm:hidden lg:pr-0">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              const id = `${blog._id}`;
              return (
                <div key={blog._id}>
                  <div className="flex justify-between items-center gap-x-4 sm:gap-x-8">
                    <h2 className="text-lg font-semibold line-clamp-2 md:text-xl">
                      {blog.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-2">
                      <EditBlogBtn editHref={id} ariaLabel={blog.title} />
                      <DeleteBlogBtn deleteHref={id} ariaLabel={blog.title} />
                    </div>
                  </div>
                  <p className="mt-1 text-sm">{formatDate(blog.createdAt!)}</p>
                  <p className="text-gray-700 mt-2 text-sm line-clamp-3">
                    {blog.summary}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="mt-4">No blogs found.</p>
          )}
        </div>

        <p className="mt-6 text-end text-sm">Total blogs: {blogs.length}</p>
      </div>
    </main>
  );
}
