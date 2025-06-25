import Image, { StaticImageData } from "next/image";

interface ServiceProps {
  img: StaticImageData;
  title: string;
  desc: string;
}

export default function Service({ img, title, desc }: ServiceProps) {
  return (
    <div className="max-w-sm rounded-xl flex flex-col items-center">
      <Image
        src={img}
        alt={title + "image"}
        className="rounded-lg h-20 w-auto"
        draggable={false}
      />
      <h3 className="mt-6 text-xl font-semibold text-center sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-center">
        {desc}
      </p>
    </div>
  );
}