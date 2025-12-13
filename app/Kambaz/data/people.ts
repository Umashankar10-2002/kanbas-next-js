// app/Kambaz/data/people.ts

export type Person = {
    id: string;
    courseId: string;
    name: string;
    role: string;
    email: string;
  };
  
  export const people: Person[] = [
    {
      id: "p1",
      courseId: "123",  // 👈 same course id you're using elsewhere
      name: "Umashankar Tamilarasu",
      role: "Student",
      email: "tamilarasu.u@northeastern.edu",
    },
    {
      id: "p2",
      courseId: "123",
      name: "Janani Murugesan",
      role: "Student",
      email: "murugesan.j@northeastern.edu",
    },
    {
      id: "p3",
      courseId: "123",
      name: "Dr. Emily Brown",
      role: "Instructor",
      email: "emily@northeastern.edu",
    },
  ];
  