import { ExperienceItem, Project, Skill } from './types';

// Start date: July 15, 2020
const START_DATE = new Date('2020-07-15');

export const calculateExperience = (): string => {
  const now = new Date();
  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();

  // Adjust for partial years (if current month is before start month)
  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust for partial months (if current day is before start day)
  if (now.getDate() < START_DATE.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  if (months === 11) {
    return `nearly ${years + 1} years`;
  }
  
  if (months === 0) {
    return `${years} years`;
  }

  return `${years}.${months} years`;
};

export const TOTAL_EXPERIENCE = calculateExperience();

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    company: 'Dedalus',
    role: 'Software Engineering Senior Associate',
    period: 'JUN 2023 - Present',
    description: [
      'Contributed to the migration of a large-scale LIMS application from Angular 12 to Angular 20.',
      'Built an Audit Mechanism using Elasticsearch to track user activity and ensure full compliance.',
      'Implemented UI and server-side caching to improve performance and reduce load times.',
      'Added compression techniques to decrease API payload size and speed up content delivery.',
    ],
  },
  {
    id: '2',
    company: 'Boodskap Labs',
    role: 'Software Engineer',
    period: 'AUG 2021 - MAY 2023',
    description: [
      'Developed multiple enterprise applications using Angular (v12-v14) with reusable components and scalable architecture.',
      'Implemented state management with NgRx and robust API handling with RxJS for reliability and maintainability.',
      'Built rich UI experiences using Monaco Editor, ECharts, AG-Grid, and Google Maps integrations.',
      'Collaborated with clients on requirements, demos, and enhancements, delivering consistent product improvements.',
    ],
  },
  {
    id: '3',
    company: 'Finix Info Solution',
    role: 'Frontend Developer',
    period: 'JUL 2020 - AUG 2021',
    description: [
      'Designed and developed complete responsive UIs using jQuery, Bootstrap, and HTML5 for multiple client projects.',
      'Owned full lifecycle delivery for web projects, including UI design, development, and client communication.',
      'Built B2B platform modules with workflows for buyers, sellers, logistics, banks, and insurance users.',
      'Performed unit testing and improved code reliability across delivered features.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'LIMS Workflow Management System',
    description: 'A healthcare laboratory information system that streamlines sample tracking, workflow automation, and audit compliance for large-scale lab operations.',
    techStack: ['Angular', 'Kendo grid', 'Elasticsearch', 'RxJS', 'Bootstrap'],
    imageUrl: '/images/lims.png',
  },
  {
    id: 'p2',
    title: 'Rules Engine IDE',
    description: 'A browser-based visual rule editor enabling users to build, test, and manage business rules using a custom Monaco-editor powered interface.',
    techStack: ['Angular', 'TypeScript', 'NgRx', 'Monaco Editor', 'RxJS'],
    imageUrl: '/images/ide.png',
  },
  {
    id: 'p3',
    title: 'Fleet Management System',
    description: 'A real-time fleet monitoring platform featuring trip history visualization, geo-tracking, and analytics for vehicle movement and performance.',
    techStack: ['Angular', 'TypeScript', 'Google Maps API', 'ECharts', 'Node'],
    imageUrl: '/images/fms.png',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Angular / Typescript', category: 'Frontend', proficiency: 90 },
  { name: 'Angular material / Bootstrap', category: 'Frontend', proficiency: 85 },
  { name: 'Javascript', category: 'Frontend', proficiency: 80 },
  { name: 'RxJS / NgRx', category: 'Frontend', proficiency: 75 },
  { name: 'React', category: 'Frontend', proficiency: 70 },
  { name: 'C# / .NET', category: 'Backend', proficiency: 65 },
  { name: 'Ionic / Flutter', category: 'Frontend', proficiency: 60 },
  { name: 'SQL', category: 'Backend', proficiency: 60 },
  { name: 'Elasticsearch', category: 'Backend', proficiency: 55 },
  { name: 'Node.js', category: 'Backend', proficiency: 50 },
];