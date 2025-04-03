export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Stephanie Hutson",
  title: "Economics Ph.D. Student",
  institution: "University of California San Diego",
  // Note that links work in the description
  description:
    "I'm a second-year <a href='https://economics.ucsd.edu/'>Economics</a> PhD student at UC San Diego. My fields are Environmental and Industrial Organization. In particular I am interested in the ",
  email: "shutson@ucsd.edu",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "stephaniemhutson",
  // linkedinUsername: "janesmith",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://economics.ucsd.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
  cvUrl: "./CV.pdf"
};
