import Link from "next/link";
import { ReactNode } from "react";

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function AnimatedLink({ href, children, className }: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-block ${className}`}
    >
      {children}
      <span
        className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 transform bg-current transition-transform duration-500 group-hover:scale-x-100"
      />
    </Link>
  );
};