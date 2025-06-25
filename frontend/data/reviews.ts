import { StaticImageData } from "next/image";

import PlaceholderImg from "@/public/1000x1000.svg";

export interface Review {
  id: number;
  name: string;
  message: string;
  brand?: string;
  avatar: StaticImageData;
}

export const topRowReviews: Review[] = [
  {
    id: 1, 
    name: "Laurel Herz",
    // brand: "Blue Springs",
    message: "They were awesome!! Very quick and cleaned our returns and vents very well. Highly recommend them!!",
    avatar: PlaceholderImg
  },
  {
    id: 2, 
    name: "Penelope Tilbury",
    // brand: "Blue Springs",
    message: "Duct Daddy was efficient and professional in cleaning my vents. I was impressed with his personality and skills.",
    avatar: PlaceholderImg
  },
  {
    id: 3, 
    name: "PJ B",
    // brand: "Blue Springs",
    message: "The young men did a very nice job of cleaning and sanitizing my air ducts. I highly recommend!",
    avatar: PlaceholderImg
  },
  {
    id: 4, 
    name: "Ray Ruark",
    // brand: "Blue Springs",
    message: "They showed up , were very friendly and really helped us out. Had birds nest in a vent. Would highly recommend them.",
    avatar: PlaceholderImg
  },
  {
    id: 5, 
    name: "Rebecca Green",
    // brand: "Blue Springs",
    message: "Not only did duct daddy do a great job with our vents…. The owner Was super knowledgeable and easy to work with!",
    avatar: PlaceholderImg
  },
];

export const bottomRowReviews: Review[] = [
  {
    id: 1, 
    name: "Matt Scrogham",
    // brand: "Lee's Summit",
    message: "The Team at Duct Daddy was awesome! They went through each vent of the house and cleaned everything.",
    avatar: PlaceholderImg
  },
  {
    id: 2, 
    name: "Frankie Malena",
    // brand: "Lee's Summit",
    message: "Great experience, friendly customer service and amazing results! Recommend if your in need of duct cleaning!!",
    avatar: PlaceholderImg
  },
  {
    id: 3, 
    name: "Tammy Myers Hanson",
    // brand: "Lee's Summit",
    message: "Highly recommend!! Thorough, reliable, friendly, and responsive. Breathing easier because of him!!",
    avatar: PlaceholderImg
  },
  {
    id: 4, 
    name: "Chris Bryant",
    // brand: "Lee's Summit",
    message: "Great communication! Professional and efficient from start to finish. Definitely recommend",
    avatar: PlaceholderImg
  },
  {
    id: 5, 
    name: "Joe Black",
    // brand: "Lee's Summit",
    message: "Finding good honest reliable contractors of any trade is a chore. I don't think you'll go wrong here!!!",
    avatar: PlaceholderImg
  },
];