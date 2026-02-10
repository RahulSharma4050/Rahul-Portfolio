export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  role: string;
  duration: string;
  techStack: string[];
  link?: string;
  github?: string;
  featured: boolean;
  category: 'Live' | 'Government' | 'Personal';
  imageUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  location: string;
  grade?: string;
}

export interface ResumeData {
  name: string;
  role: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  leetcode?: string;
  resumeUrl?: string;
  profileImage?: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  achievements: string[];
}
