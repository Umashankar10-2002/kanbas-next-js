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
      // optional seed example:
      // { _id: "cs5010", title: "CS 5010 Program Design Paradigms", code: "CS5010", term: "Spring 2025" }
    ],
    modules: [],
    enrollments: [],
  };
  
  export default db;
  