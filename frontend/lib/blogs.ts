import { BlogProps } from "@/types/blog";
import api from "./axios";

export async function getAllBlogs(): Promise<BlogProps[]> {
  try {
    const res = await api.get("/blogs");
    if (!Array.isArray(res.data)) {
      throw new Error("Invalid response: expected an array of blogs");
    }
    return res.data;
  } catch (error) {
    console.log("Error fetching blogs", error);
    return [];
  }
}