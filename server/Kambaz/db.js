// server/Kambaz/db.js

const db = {
    users: [
      {
        _id: "123",
        username: "iron_man",
        password: "stark123",
        firstName: "Tony",
        lastName: "Stark",
        role: "STUDENT",
        email: "iron@avengers.com",
      },
    ],
    courses: [
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
      
    ],
    modules: [],
    assignments: [],
    enrollments: [
      // seed: iron_man enrolled in a couple courses so dashboard isn't empty after login
      { _id: "e1", user: "123", course: "cs5610" },
      { _id: "e2", user: "123", course: "cs5010" },
    ],
    
  };
  
  export default db;
  