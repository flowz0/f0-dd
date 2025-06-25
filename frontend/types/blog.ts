import { StaticImageData } from "next/image";

export interface BlogProps {
  id?: string;
  author?: string;
  createdAt?: string;
  readTime: string;
  img?: string | StaticImageData | null | File | undefined;
  title: string;
  summary: string;
  header: string;
  paragraph: string;
  header2: string;
  paragraph2: string;
}