export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  notes?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "University of California San Diego",
    degree: "Ph.D. in Economics",
    advisor: "Prof. Mark Jacobsen",
  },
  {
    year: "2022-2023",
    institution: "University of North Carolina Chapel Hill",
    degree: "Ph.D. in Economics",
    notes: "(Transferred to UC San Diego in 2023)"
  },
  {
    year: "2008-2012",
    institution: "University of Virginia",
    degree: "BS Environmental Science"
  }
];
