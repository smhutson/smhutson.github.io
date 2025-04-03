export interface Teaching {
  date: string;
  title: string;
  description: string;
  institution: string;
  link?: string;
}

export const teachingExperience: Teaching[] = [

  {
    date: "2022-2023",
    institution: "University of North Carolina",
    description: "ECON 410 Microeconomics and ECON 455 Environmental Theory",
    title: "Teaching Assistant",
  },

  {
    date: "2024-Present",
    institution: "UC San Diego",
    title: "Teaching Assistant",
    description:
    `ECON 100B Microeconomics, ECON 105 Industrial Organization,
    ECON 131 Economics of the Environment, ECON 145 Economics of the Ocean`

  }
  // If you don't want to show news, just make the array empty.
  /*{
    date: "March 2024",
    title: "Paper accepted at ICML 2024",
    description: "Our work on causal discovery in time series data has been accepted at ICML 2024.",
    link: "https://icml.cc/",
  }*/
];
