export const jobListings = [
  {
    id: 1,
    title: "React Developer",
    company: "ABC Inc.",
    address: "New York, US",
    experienceLevel: "Mid Level",
    position: "Frontend Developer",
    industry: "Software",
    keywords: ["React", "JavaScript", "HTML", "CSS"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    title: "Angular Developer",
    company: "XYZ Tech",
    address: "San Francisco, US",
    experienceLevel: "Senior Level",
    position: "Full Stack Developer",
    industry: "Software Development",
    keywords: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Tech Solutions",
    address: "Chicago, US",
    experienceLevel: "Mid Level",
    position: "Data Analyst",
    industry: "Data Science",
    keywords: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "Web Wizards",
    address: "Los Angeles, US",
    experienceLevel: "Senior Level",
    position: "Product Manager",
    industry: "Product Management",
    keywords: ["Product Strategy", "User Research", "Product Development"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    title: "UX/UI Designer",
    company: "Dev Geniuses",
    address: "Austin, US",
    experienceLevel: "Entry Level",
    position: "UI/UX Designer",
    industry: "Design",
    keywords: ["User Experience", "User Interface", "Prototyping"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    title: "Java Developer",
    company: "Innovate Labs",
    address: "Seattle, US",
    experienceLevel: "Mid Level",
    position: "Backend Developer",
    industry: "Software",
    keywords: ["Java", "Spring Framework", "Database"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 7,
    title: "Marketing Manager",
    company: "Code Crafters",
    address: "Boston, US",
    experienceLevel: "Senior Level",
    position: "Marketing Manager",
    industry: "Marketing",
    keywords: ["Marketing Strategy", "Campaign Management"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 8,
    title: "Finance Analyst",
    company: "Digital Creations",
    address: "Denver, US",
    experienceLevel: "Entry Level",
    position: "Financial Analyst",
    industry: "Finance",
    keywords: ["Financial Analysis", "Budgeting", "Financial Reporting"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 9,
    title: "HR Specialist",
    company: "Tech Innovators",
    address: "Miami, US",
    experienceLevel: "Mid Level",
    position: "Human Resources Specialist",
    industry: "Human Resources",
    keywords: ["Recruitment", "Employee Relations"],
    imageSrc: "https://via.placeholder.com/50",
  },
  {
    id: 10,
    title: "Network Engineer",
    company: "Future Tech",
    address: "Dallas, US",
    experienceLevel: "Senior Level",
    position: "Network Engineer",
    industry: "Information Technology",
    keywords: ["Networking", "Firewall Management"],
    imageSrc: "https://via.placeholder.com/50",
  },
];

export const jobOpeningsByTitleAndLocation = {};

jobListings.forEach((job) => {
  const { title, address } = job;

  if (!jobOpeningsByTitleAndLocation[title]) {
    jobOpeningsByTitleAndLocation[title] = {};
  }

  if (!jobOpeningsByTitleAndLocation[title][address]) {
    jobOpeningsByTitleAndLocation[title][address] = 0;
  }

  jobOpeningsByTitleAndLocation[title][address]++;
});
