"use client";

import { LoginData } from "@/types/login";
import Link from "next/link";
import { useState } from "react";
import FormInput from "./FormInput";

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginData>>({});

  const validateField = (name: keyof LoginData, value: string): string => {
    if (name === "username" && !value.trim()) {
      return "Username is required.";
    } else if (name === "username" && value.length < 4) {
      return "Username must be longer than 4 characters"
    }
    if (name === "password" && !value.trim()) {
      return "Password is required.";
    } else if (name === "password" && value.length < 6) {
      return "Password must be longer than 6 characters."
    }
    return "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof LoginData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))

    const error = validateField(name as keyof LoginData, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<LoginData> = {};
    (Object.keys(formData) as (keyof LoginData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login submitted:", formData);
      alert("Login successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:w-1/2" noValidate>
      <FormInput
        name="username"
        label="Username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.username}
        required
      />
      <FormInput
        name="password"
        label="Password"
        placeholder="••••••"
        type="password"
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
        Log in
      </button>
      <p className="mt-2 text-center">
        Don&apos;t have an account? {" "}
        <br className="sm:hidden" /> 
        <Link href="/register" className="text-[#0080DB] hover:underline hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]">Sign up</Link>
      </p>
    </form>
  );
}