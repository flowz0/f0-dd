// import { StaticImageData } from "next/image";

import { StaticImageData } from "next/image";

export interface BlogProps {
  _id?: string;
  author?: string;
  createdAt?: string;
  readTime: string;
  img?: string | File | null | StaticImageData;
  title: string;
  summary: string;
  header: string;
  paragraph: string;
  header2: string;
  paragraph2: string;
}