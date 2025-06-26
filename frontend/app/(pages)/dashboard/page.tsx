import Header from "@/app/components/Header";
import DeleteBlogBtn from "@/app/components/pages/dashboard/DeleteBlogBtn";
import EditBlogBtn from "@/app/components/pages/dashboard/EditBlogBtn";
import { getAllBlogs } from "@/lib/blogs";
import formatDate from "@/lib/formatDate";
import slugify from "@/lib/slugify";
import { BlogProps } from "@/types/blog";
import Link from "next/link";
import { FaFileCirclePlus } from "react-icons/fa6";

export default async function DashboardPage() {
  const blogs = await getAllBlogs();
  const sortedBlogs: BlogProps[] = blogs
    .filter((b): b is BlogProps => !!b.createdAt)
    .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());

  return (
    <main className="mb-16">
      <Header subtitle="Manage your blogs here. Create, view, update, or delete any blog.">
        Blog Dashboard
      </Header>
      <div className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] mx-6 px-6 py-8 max-w-7xl lg:mx-auto rounded-lg lg:px-20 lg:py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">
            All Blogs
          </h2>
          <Link href="/create-blog" className="text-[#0080DB] hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]">
            <FaFileCirclePlus className="w-9 h-9" />
            <span className="sr-only">Create new blog</span>
          </Link>
        </div>
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
              {sortedBlogs.length > 0 ? (
                sortedBlogs.map((blog) => {
                  const slug = slugify(blog.title);
                  const slugAndId = `${slug}-${blog._id}`;

                  return (
                    <tr key={blog._id} className="border-t">
                      <td className="py-4 pr-4 font-medium truncate max-w-[8rem] lg:pr-4 lg:max-w-[10rem]">{blog.title}</td>
                      <td className="py-4 pr-2 truncate max-w-[20rem] lg:max-w-[28rem] lg:pr-4">{blog.summary}</td>
                      <td className="py-4 pr-2 truncate max-w-[12rem] lg:max-w-[16rem] lg:pr-4">{formatDate(blog.createdAt!)}</td>
                      <td className="py-4 pr-2 flex items-center gap-2 max-w-[8rem] lg:max-w-[16rem] lg:pr-4">
                        <EditBlogBtn
                          editHref={slugAndId}
                          ariaLabel={blog.title}
                        />
                        <DeleteBlogBtn
                          deleteHref={slugAndId}
                          ariaLabel={blog.title}
                        />
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
          {sortedBlogs.length > 0 ? (
            sortedBlogs.map((blog) => {
              const slug = slugify(blog.title);
              const slugAndId = `${slug}-${blog._id}`;

              return (
                <div
                  key={blog._id}
                >
                  <div className="flex justify-between items-center gap-x-4 sm:gap-x-8">
                    <h2 className="text-lg font-semibold line-clamp-2 md:text-xl">
                      {blog.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-2">
                      <EditBlogBtn
                        editHref={slugAndId}
                        ariaLabel={blog.title}
                      />
                      <DeleteBlogBtn
                        deleteHref={slugAndId}
                        ariaLabel={blog.title}
                      />
                    </div>
                  </div>
                  <p className="mt-1 text-sm">{formatDate(blog.createdAt!)}</p>
                  <p className="text-gray-700 mt-2 text-sm line-clamp-3">{blog.summary}</p>
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