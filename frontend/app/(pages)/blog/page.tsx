import CTA from "@/app/components/CTA";
import AllBlogs from "@/app/components/pages/blog/AllBlogs";
import FeaturedBlogs from "@/app/components/pages/blog/FeaturedBlogs";
import Header from "@/app/components/Header";
import FAQs from "@/app/components/pages/landing/FAQs";

export default function Blog() {
  return (
    <>
      <article>
        <div>
          <Header gradientBg>
            Discover our latest blogs
          </Header>
          <div className="bg-[#ffffff] px-6">
            <div className="pt-12 pb-20 flex flex-col gap-y-16 max-w-7xl mx-auto">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Featured blogs</h2>
                <FeaturedBlogs />
              </div>
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">All blogs</h2>
                <AllBlogs />
              </div>
            </div>
          </div>
        </div>
      </article>
      <FAQs />
      <CTA />
    </>
  );
}