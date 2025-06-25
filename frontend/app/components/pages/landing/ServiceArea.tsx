import Image from "next/image";

import ServiceAreaImg from "@/public/Service_Area_Photo.png";
import ServiceAreaCard from "./ServiceAreaCard";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-[#ffffff]">
      <div className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center sm:text-4xl">
          Proudly Serving
          <br />
          Kansas City and Surrounding Areas
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Image
            src={ServiceAreaImg}
            alt="Service area image"
            className="h-full w-auto object-cover rounded-md"
            draggable={false}
          />
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">Service Areas</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4 sm:grid-cols-3">
              <ServiceAreaCard location="Oak Grove" />
              <ServiceAreaCard location="Grain Valley" />
              <ServiceAreaCard location="Blue Springs" />
              <ServiceAreaCard location="Lees Summit" />
              <ServiceAreaCard location="Independence" />
              <ServiceAreaCard location="Kansas City" />
              <ServiceAreaCard location="Raymore" />
              <ServiceAreaCard location="Raytown" />
              <ServiceAreaCard location="Pleasant Hill" />
              <ServiceAreaCard location="Odessa" className="sm:hidden" />
            </div>
            <p className="mt-6">Looking for trusted air duct cleaning or dryer vent services near you? Duct Daddy proudly serves homeowners and businesses across the KC metro. Whether you&apos;re in Missouri or Kansas, we&apos;re just a call away.</p>
          </div>
        </div>
      </div>
    </section>
  );
}