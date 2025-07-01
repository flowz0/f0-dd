"use client";

import { RegisterData } from "@/types/register";
import Link from "next/link";
import { useState } from "react";
import FormInput from "./FormInput";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const router = useRouter();

  const [errors, setErrors] = useState<Partial<RegisterData>>({});

  const validateField = (name: keyof RegisterData, value: string): string => {
    if (name === "firstName" && !value.trim()) {
      return "First name is required.";
    } else if (name === "firstName" && value.length < 4) {
      return "First name must be longer than 4 characters.";
    }
    if (name === "lastName" && !value.trim()) {
      return "Last name is required.";
    } else if (name === "lastName" && value.length < 4) {
      return "Last name must be longer than 4 characters.";
    }
    if (name === "username" && !value.trim()) {
      return "Username is required.";
    } else if (name === "username" && value.length < 4) {
      return "Username must be longer than 4 characters";
    }
    if (name === "password" && !value.trim()) {
      return "Password is required."
    } else if (name === "password" && value.length < 6) {
      return "Password must be longer than 6 characters.";
    }
    return "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof RegisterData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name as keyof RegisterData, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<RegisterData> = {};
    (Object.keys(formData) as (keyof RegisterData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", formData, { withCredentials: true });
      if (res.status === 201) {
        setFormData({ firstName: "", lastName: "", username: "", password: "" });
        setErrors({});
      }
      toast.success("Register successful!");
      router.push("/login");
    } catch (error) {
      toast.error("Login failed", error!);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 md:w-1/2" noValidate>
      <FormInput
        name="firstName"
        label="First name"
        placeholder="First name"
        className="bg-[#ffffff]"
        value={formData.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.firstName}
        required
      />
      <FormInput
        name="lastName"
        label="Last name"
        placeholder="Last name"
        className="bg-[#ffffff]"
        value={formData.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.lastName}
        required
      />
      <FormInput
        name="username"
        label="Username"
        placeholder="Username"
        className="bg-[#ffffff]"
        value={formData.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.username}
        required
      />
      <FormInput
        name="password"
        label="Password"
        type="password"
        placeholder="••••••"
        className="bg-[#ffffff]"
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        required
      />
      <button
        type="submit"
        className="bg-[#0080DB] text-[#E6E6E6] mt-4 py-2 px-4 rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
      >
        Register account
      </button>
      <p className="mt-2 text-center">
        Already have an account? {" "}
        <br className="sm:hidden" />
        <Link href="/login" className="text-[#0080DB] hover:underline hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]">Sign in</Link>
      </p>
    </form>
  );
}