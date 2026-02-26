import type { LucideIcon } from "lucide-react";

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  repo: string;
  stars: number;
  forks: number;
  featured: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  href: string;
  featured: boolean;
}

export type EntryType = "work" | "education" | "achievement";

export interface TimelineEntry {
  id: number;
  type: EntryType;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  duration: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  years: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: SkillItem[];
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  handle: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TechStackItem {
  name: string;
  tone: string;
}
