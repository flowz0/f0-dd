import Carousel from "./Carousel";
import Img1 from "@/public/gallery/1.png";
import Img2 from "@/public/gallery/2.png";
import Img3 from "@/public/gallery/3.png";
import Img4 from "@/public/gallery/4.png";
import Img5 from "@/public/gallery/5.png";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
];

export default function BeforeAfterPics() {
  return (
    <section className="bg-[#ffffff]">
      <div className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center sm:text-4xl">
          See The Duct Daddy Difference
        </h2>
        <p className="text-center mt-4">
          Real photos from homes in Oak Grove and all across KC.
        </p>
        <Carousel images={images} />
      </div>
    </section>
  );
}