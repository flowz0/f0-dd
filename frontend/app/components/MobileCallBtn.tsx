import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function MobileCallBtn() {
  return (
    <div className="fixed z-40 right-6 bottom-12 md:hidden">
      <Link href="tel:+18167082608">
        <FaPhoneAlt className="bg-[#0080DB] text-[#E6E6E6] p-4 w-[4.4rem] h-[4.4rem] rounded-full shadow shadow-[#333333]" />
        <span className="sr-only">Call Duct Daddy</span>
      </Link>
    </div>
  );
}