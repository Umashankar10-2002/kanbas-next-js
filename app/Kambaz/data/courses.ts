// app/Kambaz/data/courses.ts

export type Course = {
    id: string;
    title: string;
    code: string;
    term: string;
    color?: string;
    image?: string;
  };
  
  export const courses: Course[] = [
    {
      id: "cs5010",
      title: "CS 5010 Program Design Paradigms",
      code: "CS5010.MERGED.202530",
      term: "Spring 2025",
      color: "#e91e63",
    },
    {
      id: "cs5200",
      title: "CS 5200 Database Management Systems",
      code: "CS5200.MERGED.202530",
      term: "Spring 2025",
      image: "/course-mysql.jpg",
    },
    {
      id: "cs5610",
      title: "CS 5610 Web Development",
      code: "CS5610.18616.202610",
      term: "Fall 2025",
      color: "#1e88e5",
    },
    {
      id: "cs5800",
      title: "CS 5800 Algorithms",
      code: "CS5800.MERGED.202610",
      term: "Fall 2025",
      color: "#1e3a8a",
    },
    {
      id: "khoury-orient",
      title: "Khoury College New Master's Orientation",
      code: "Khoury.Masters.Orientation",
      term: "Term",
      color: "#6b7280",
    },
    {
      id: "career-prep",
      title: "Spring 2025 – Career Preparation",
      code: "Sp25.CareerPrep.CoopProcess",
      term: "Spring 2025",
      color: "#a06a00",
    },
  ];
  