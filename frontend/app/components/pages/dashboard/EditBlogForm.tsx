"use client";

import { BlogProps } from "@/types/blog";
import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import TextArea from "./TextArea";
import FileInput from "./FileInput";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import useAuthUser from "@/hooks/useAuthUser";
import toast from "react-hot-toast";
import axios from "axios";

export default function EditBlogForm({ initialData }: { initialData: BlogProps }) {
  const [blogData, setBlogData] = useState<BlogProps>(initialData);
  const [errors, setErrors] = useState<Partial<BlogProps>>({});
  const [previewUrl, setPreviewURL] = useState<string | null>(null);
  const router = useRouter();
  const user = useAuthUser();

  useEffect(() => {
    if (blogData.img instanceof File) {
      const objectUrl = URL.createObjectURL(blogData.img);
      setPreviewURL(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else if (typeof blogData.img === "string") {
      setPreviewURL(blogData.img);
    } else if (typeof blogData.img === "object" && "src" in blogData.img!) {
      setPreviewURL(blogData.img.src)
    }
  }, [blogData.img]);

  type FieldValue = string | File | StaticImageData | null | undefined;

  const validateField = (
    name: keyof BlogProps,
    value: FieldValue
  ): string => {
    if (name === "img") {
      if (
        !value ||
        (typeof value !== "string" &&
          !(value instanceof File) &&
          !(typeof value === "object" && "src" in value))
      ) {
        return "A valid image file is required.";
      }
      return "";
    }
    if (typeof value !== "string") return "";
    if (name === "readTime" && !value.trim()) {
      return "Read time is required.";
    } else if (name === "readTime" && value.length < 0) {
      return "Read time must be more than 0 minutes.";
    }
    if (name === "title" && !value.trim()) {
      return "Title is required.";
    } else if (name === "title" && value.length < 5) {
      return "Title must be more than 5 characters.";
    }
    if (name === "summary" && !value.trim()) {
      return "Summary is required.";
    } else if (name === "summary" && value.length < 10) {
      return "Summary must be more than 10 characters";
    }
    if (name === "header" && !value.trim()) {
      return "Header is required.";
    } else if (name === "header" && value.length < 10) {
      return "Header must be more than 10 characters";
    }
    if (name === "paragraph" && !value.trim()) {
      return "Paragraph is required.";
    } else if (name === "paragraph" && value.length < 10) {
      return "Paragraph must be more than 10 characters";
    }
    if (name === "header2" && !value.trim()) {
      return "Second header is required.";
    } else if (name === "header2" && value.length < 10) {
      return "Second header must be more than 10 characters";
    }
    if (name === "paragraph2" && !value.trim()) {
      return "Second paragraph is required.";
    } else if (name === "paragraph2" && value.length < 10) {
      return "Second paragraph must be more than 10 characters";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({ ...prev, [name]: value }))
    const error = validateField(name as keyof BlogProps, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    const value = name === "img" ? blogData.img : e.target.value;
    const error = validateField(name as keyof BlogProps, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFileChange = (file: File | null) => {
    setBlogData((prev) => ({ ...prev, img: file }));
    const error = validateField("img", file);
    setErrors((prev) => ({ ...prev, img: error || undefined }));
  }

  const validateForm = () => {
    const newErrors: Partial<BlogProps> = {};
    (Object.keys(blogData) as (keyof BlogProps)[]).forEach((key) => {
      const value = blogData[key];
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!user) {
        toast.error("You must be logged in to edit a blog");
        router.push("/login");
        return;
      }

      if (!validateForm()) return;

      const res = await axios.put(`http://localhost:5001/api/blogs/${blogData._id}`, blogData, {
        withCredentials: true
      });
      if (res.status === 201 || res.status === 200) {
        toast.success("Blog updated successfully!");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("EditBlogForm handleSubmit:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Edit Blog Form" className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] mx-6 px-6 py-8 max-w-4xl flex flex-col gap-y-6 lg:mx-auto rounded-lg lg:px-20 lg:py-20" noValidate>
      <FormInput
        name="title"
        label="Blog title"
        type="text"
        placeholder="Title for blog"
        value={blogData.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.title}
        required
      />
      <TextArea
        name="summary"
        label="Blog summary"
        type="text"
        placeholder="Summary for blog"
        value={blogData.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.summary}
        required
      />
      <FormInput
        name="readTime"
        label="Read time"
        type="number"
        placeholder="1 - 59 (minutes)"
        value={blogData.readTime}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.readTime}
        required
      />
      <FileInput
        name="img"
        label="Blog image"
        previewUrl={previewUrl}
        error={errors.img as string}
        onBlur={handleBlur}
        onChange={handleFileChange}
        required
      />
      <FormInput
        name="header"
        label="First header"
        type="text"
        placeholder="Header for blog"
        value={blogData.header}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.header}
        required
      />
      <TextArea
        name="paragraph"
        label="First paragraph"
        type="text"
        placeholder="Paragraph for blog"
        value={blogData.paragraph}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.paragraph}
        required
      />
      <FormInput
        name="header2"
        label="Second header"
        type="text"
        placeholder="Second header for blog"
        value={blogData.header2}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.header2}
        required
      />
      <TextArea
        name="paragraph2"
        label="Second Paragraph"
        type="text"
        placeholder="Second paragraph for blog"
        value={blogData.paragraph2}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.paragraph2}
        required
      />
      <button type="submit" className="bg-[#0080DB] text-[#E6E6E6] mt-4 py-3 px-4 w-full font-semibold rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
        Save blog
      </button>
    </form>
  );
}