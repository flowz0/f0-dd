import axios from "axios";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  deleteHref: string;
  ariaLabel: string;
  refetchBlogs: () => void;
}

export default function DeleteBlogModal({
  isOpen,
  onClose,
  title,
  children,
  deleteHref,
  ariaLabel,
  refetchBlogs,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
      modalRef.current?.focus();
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:5001/api/blogs/${deleteHref}`, { withCredentials: true });
      if (res.status === 201 || res.status === 200) {
        toast.success("Blog deleted successfully!");
        onClose();
        refetchBlogs();
      } else {
        toast.success("Blog did not delete!");
        onClose();
      }
    } catch (error) {
      toast.error("Failed to delete blog.");
      console.error("HandleDelete error:", error);
    }
  };

  return (
    <div
      className="bg-[#16385B] fixed inset-0 z-50 px-6 flex items-center justify-center bg-opacity-90"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-[#E6E6E6] rounded-lg shadow shadow-[#16385B] px-6 py-7 md:px-9 md:py-8"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        {title && (
          <h1 id="modal-title" className="text-[#333333] text-lg font-semibold md:text-xl">
            {title}
          </h1>
        )}
        <div className="mt-2 text-[#333333]">{children}</div>
        <div className="mt-4 flex gap-x-2">
          <button
            onClick={handleDelete}
            aria-label={`Delete ${ariaLabel}`}
            className="bg-[hsl(0,100%,20%)] text-[hsl(0,100%,80%)] rounded-md px-4 py-2 font-semibold md:px-5 md:py-3 hover:bg-[hsl(0,100%,28%)]"
          >
            Delete blog
          </button>
          <button
            onClick={onClose}
            className="bg-[hsl(205,100%,20%)] text-[hsl(205,100%,80%)] rounded-md px-4 py-2 font-semibold md:px-5 md:py-3 hover:bg-[hsl(205,100%,28%)]"
            aria-label="Close modal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}