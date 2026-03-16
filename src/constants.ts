import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Budfeast - Ecommerce Mobile App',
    description: 'A full-featured Flutter e-commerce application integrated with Firebase for product listings, cart management, and secure checkout.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    metrics: [
      { label: 'Platform', value: 'Android/iOS' },
      { label: 'Backend', value: 'Firebase' }
    ]
  },
  {
    id: '2',
    title: 'Web & Cloud Logo Design',
    description: 'Creative logo design and branding for various web and cloud-based products, focusing on modern aesthetics and brand identity.',
    tags: ['UI/UX', 'Adobe Illustrator', 'Canva'],
    metrics: [
      { label: 'Tools', value: 'Illustrator' },
      { label: 'Focus', value: 'Branding' }
    ]
  },
  {
    id: '3',
    title: 'Social Media Marketing Design',
    description: 'Designing engaging social media creatives, banners, and posts to drive user engagement and brand awareness.',
    tags: ['Canva', 'Social Media', 'Marketing'],
    metrics: [
      { label: 'Engagement', value: 'High' },
      { label: 'Content', value: 'Visuals' }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter & Dart', level: 95, category: 'Technical' },
  { name: 'UI/UX Design', level: 90, category: 'Technical' },
  { name: 'PowerBI', level: 85, category: 'Tools' },
  { name: 'MySQL', level: 80, category: 'Technical' },
  { name: 'Python (Pandas, NumPy)', level: 75, category: 'Technical' },
  { name: 'Adobe Illustrator', level: 85, category: 'Tools' },
  { name: 'Canva', level: 95, category: 'Tools' },
  { name: 'Machine Learning & NLP', level: 70, category: 'Technical' },
  { name: 'Data Visualization', level: 88, category: 'Technical' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Capnis Infotech Pvt. Ltd',
    role: 'Mobile App Developer',
    period: 'Oct 2024 - Oct 2025',
    description: [
      'Developed responsive mobile UIs using Flutter & Dart with animations.',
      'Integrated REST APIs and implemented navigation and state management.',
      'Built a Flutter E-commerce app with Firebase integration.'
    ]
  },
  {
    company: 'Capnis Infotech Pvt. Ltd',
    role: 'UI/UX Designer',
    period: 'Jul 2025 - Oct 2025',
    description: [
      'Designed intuitive and user-friendly UI/UX, improving performance.',
      'Created logos, banners, and social media creatives using Adobe Illustrator & Canva.',
      'Maintained design consistency with style guides and reusable components.'
    ]
  },
  {
    company: 'Greens Technologies',
    role: 'Data Science Intern',
    period: 'Internship',
    description: [
      'Gained hands-on experience in Python, Pandas, NumPy, and Power BI.',
      'Worked on Machine Learning and NLP algorithms.'
    ]
  }
];
