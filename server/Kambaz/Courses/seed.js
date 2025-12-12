import mongoose from "mongoose";
import CourseModel from "./model.js";

console.log("SEED: starting...");

const MONGO_URI =
  process.env.MONGO_URI ||
  process.env.MONGODB_CONNECTION_STRING ||
  "mongodb://127.0.0.1:27017/kambaz";

const courses = [
  {
    _id: "cs5010",
    title: "CS 5010 Program Design Paradigms",
    code: "CS5010.MERGED.202530",
    term: "Spring 2025",
    color: "#e91e63",
  },
  {
    _id: "cs5200",
    title: "CS 5200 Database Management Systems",
    code: "CS5200.MERGED.202530",
    term: "Spring 2025",
    image: "/course-mysql.jpg",
  },
  {
    _id: "cs5610",
    title: "CS 5610 Web Development",
    code: "CS5610.18616.202610",
    term: "Fall 2025",
    color: "#1e88e5",
  },
  {
    _id: "cs5800",
    title: "CS 5800 Algorithms",
    code: "CS5800.MERGED.202610",
    term: "Fall 2025",
    color: "#1e3a8a",
  },
  {
    _id: "khoury-orient",
    title: "Khoury College New Master's Orientation",
    code: "Khoury.Masters.Orientation",
    term: "Term",
    color: "#6b7280",
  },
  {
    _id: "career-prep",
    title: "Spring 2025 – Career Preparation",
    code: "Sp25.CareerPrep.CoopProcess",
    term: "Spring 2025",
    color: "#a06a00",
  },
];

async function seed() {
  try {
    console.log("SEED: connecting to:", MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log("SEED: connected ✅");

    const ids = courses.map((c) => c._id);
    const del = await CourseModel.deleteMany({ _id: { $in: ids } });
    console.log("SEED: deleted", del.deletedCount);

    const inserted = await CourseModel.insertMany(courses);
    console.log("SEED: inserted", inserted.length);

    await mongoose.disconnect();
    console.log("SEED: done ✅");
    process.exit(0);
  } catch (err) {
    console.error("SEED ERROR ❌", err);
    process.exit(1);
  }
}

seed();
