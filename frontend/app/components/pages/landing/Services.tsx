import Service from "./Service";

import AirDuctImg from "@/public/services/airduct.png";
import DyerVentImg from "@/public/services/dryervent.png";
import MaintenanceImg from "@/public/services/preventativemaintenance.png";

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto rounded-3xl flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        Services We Offer
      </h2>
      <div className="mt-8 flex flex-wrap justify-center flex-col gap-8 md:flex-row">
        <Service
          img={AirDuctImg}
          title="Air Duct Cleaning"
          desc="HVAC cleaning including vents, trunk lines, and furnace using powerful negative air machines and rotary brushes."
        />
        <Service
          img={DyerVentImg}
          title="Dryer Vent Cleaning"
          desc="Thorough lint and debris removal from your dryer vent to prevent fires, speed up drying, and reduce energy costs."
        />
        <Service
          img={MaintenanceImg}
          title="Preventative Maintenance"
          desc="Seasonal tune-ups to boost efficiency, extend HVAC lifespan, and prevent costly repairs."
        />
      </div>
    </section>
  );
}