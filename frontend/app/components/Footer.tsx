import Image from "next/image"

import DuctDaddyLogo from "@/public/Duct-Daddy-01.png";
import Link from "next/link";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <Image
            src={DuctDaddyLogo}
            alt="Duct daddy logo"
            className="h-40 w-auto object-cover"
          />
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">
              Useful links
            </h4>
            <Link href="/about" className="w-fit">About Us</Link>
            <Link href="/contact" className="w-fit">Contact Us</Link>
            <Link href="/FAQ" className="w-fit">FAQs</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">
              Resources
            </h4>
            <Link href="/blog" className="w-fit">Blog</Link>
            <Link href="/contact" className="w-fit">Pricing</Link>
            <Link href="/faq" className="w-fit">Services</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">
              Get in touch
            </h4>
            <p>Questions or feedback?</p>
            <p>We&apos;d love to hear from you.</p>
            <div className="flex items-center gap-6 mt-6">
              <Link href="https://www.facebook.com/ductdaddykc/" target="_blank">
                <BsFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://maps.app.goo.gl/a1neN8MTXV9o5QiL9" target="_blank">
                <BsGoogle className="w-6 h-6" />
              </Link>
              <Link href="https://www.tiktok.com/@ductdaddykc" target="_blank">
                <FaTiktok className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-28 md:justify-between md:flex-row">
          <p>© 2025 Duct Daddy</p>
          <div className="flex flex-col gap-2 md:gap-8 md:flex-row">
            <Link href="/faq">Terms of Service</Link>
            <Link href="/faq">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}