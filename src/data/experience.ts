export interface WorkExperience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: WorkExperience[] = [
  {
    date: "2020-2022",
    title: "Senior Software Engineer",
    company: "Fuse Integration",
    description:
      "Developed software technology to interface with communication hardware for the US Navy.",
    // manager: "Elise Brown",
    companyUrl: "https://fuseintegration.com",
  },
  {
    date: "2016-2020",
    title: "Senior Software and Data Engineer",
    company: "Honor Technology",
    description:
      "Developed production quality backend code, lead projects with 2-3 engineers and maintained the ETF server.",
    // advisor: "Peter Wang",
    companyUrl: "https://www.honorcare.com/",
  },

];
