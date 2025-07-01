"use client";

import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import DeleteBlogModal from "./DeleteBlogModal";

interface DeleteBlogBtnProps {
  deleteHref: string;
  ariaLabel: string;
  refetchBlogs: () => void;
}

export default function DeleteBlogBtn({ deleteHref, ariaLabel, refetchBlogs }: DeleteBlogBtnProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-[hsl(0,100%,32%)] hover:text-[hsl(0,100%,40%)]"
      >
        <FaTrashCan className="w-5 h-5" />
      </button>

      <DeleteBlogModal 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        title="Delete blog"
        deleteHref={deleteHref}
        ariaLabel={ariaLabel}
        refetchBlogs={refetchBlogs}
      >
        <p className="text-gray-700">Are you sure you want to delete this blog?</p>
      </DeleteBlogModal>
    </>
  );
}