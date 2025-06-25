import { BsGeoFill } from "react-icons/bs";

interface ServiceAreaProps {
  location: string;
  className?: string;
}

export default function ServiceAreaCard({ location, className }: ServiceAreaProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BsGeoFill className="text-[#FC033E] w-4 h-4 md:w-5 md:h-5" />
      <h3 className="text-sm font-semibold md:text-base">
        {location}
      </h3>
    </div>
  );
}