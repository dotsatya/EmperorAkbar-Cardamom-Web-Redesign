import { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";
import { websiteData } from "@/data/websiteData";

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type ProductType = (typeof websiteData.shop.products)[number];

export interface CardamomGradeItem {
  grade: string;
  diameter: string;
  description: string;
  speciality: string;
  url: string;
  color: string;
  bgClass: string;
  badgeBg: string;
  product?: ProductType;
}

export interface QuickPageItem {
  title: string;
  category: string;
  url: string;
  description: string;
  icon: LucideIcon;
}

