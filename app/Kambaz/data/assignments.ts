// app/Kambaz/data/assignments.ts

export type Assignment = {
    id: string;
    courseId: string;
    title: string;
    due: string;
    points: number;
    group: string;
  };
  
  export const assignments: Assignment[] = [
    {
      id: "1",
      courseId: "123", // 👈 course in your screenshot
      title: "A1 – HTML",
      due: "Oct 15, 2025",
      points: 100,
      group: "Web Development",
    },
    {
      id: "2",
      courseId: "123",
      title: "A2 – CSS Layout",
      due: "Oct 22, 2025",
      points: 100,
      group: "Front-End Design",
    },
    {
      id: "3",
      courseId: "123",
      title: "A3 – React Components",
      due: "Oct 29, 2025",
      points: 100,
      group: "React Basics",
    },
  ];
  