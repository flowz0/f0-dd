import Link from "next/link";
import { FaFilePen } from "react-icons/fa6";

interface EditBlogBtnProps {
  editHref: string;
  ariaLabel: string;
}

export default function EditBlogBtn({ editHref, ariaLabel }: EditBlogBtnProps) {
  return (
    <Link
      href={`/edit/${editHref}`}
      aria-label={`Edit ${ariaLabel}`}
      className="text-[hsl(205,100%,32%)] hover:text-[hsl(205,100%,40%)]"
    >

      <FaFilePen className="w-6 h-6" />
    </Link>
  );
}