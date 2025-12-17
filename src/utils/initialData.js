export const initialPortfolioData = {
  selectedTemplate: 'minimal',
  theme: {
    primaryColor: '#2563eb', // blue-600
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
  },
  personal: {
    name: 'John Doe',
    role: 'Full Stack Developer',
    tagline: 'building things for the web.',
    bio: 'Passionate developer building web applications with modern technologies.',
    location: 'San Francisco, CA',
  },
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'john@example.com',
    twitter: 'https://twitter.com',
  },
  skills: [
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
  ],
  projects: [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A full-stack web application for project management.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Portfolio Site',
      description: 'A personal portfolio website built with HTML/CSS.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      github: '#',
    },
  ],
  experience: [
    {
      id: 1,
      role: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020 - Present',
      description: 'Leading the frontend team and architecting new features.',
    },
  ],
  education: [
    {
      id: 1,
      degree: 'BS Computer Science',
      school: 'University of Technology',
      period: '2016 - 2020',
    },
  ],
};
