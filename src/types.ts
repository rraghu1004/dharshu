export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Technical' | 'Tools' | 'Soft Skills';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
