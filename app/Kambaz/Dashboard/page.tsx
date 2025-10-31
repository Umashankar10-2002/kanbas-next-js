// app/Kambaz/Dashboard/page.tsx
import { FaClipboard, FaRegCommentDots, FaRegCheckSquare } from "react-icons/fa";

const courses = [
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
    image: "/course-mysql.jpg", // optional: put image in /public
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

export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ fontWeight: 700, marginBottom: 20 }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        minHeight: 220,
      }}
    >
      <div
        style={{
          height: 120,
          background: course.image
            ? `url(${course.image}) center/cover no-repeat`
            : course.color || "#c1121f",
        }}
      />

      <div style={{ padding: 12, flex: 1 }}>
        <div
          style={{
            fontWeight: 700,
            marginBottom: 6,
            lineHeight: 1.2,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          title={course.title}
        >
          {course.title}
        </div>
        <div style={{ color: "#6b7280", fontSize: 13 }}>
          {course.code}
          <span style={{ marginLeft: 6, color: "#9ca3af" }}>{course.term}</span>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #eee",
          display: "flex",
          gap: 14,
          padding: "8px 12px",
          color: "#6b7280",
          fontSize: 16,
        }}
      >
        <FaClipboard />
        <FaRegCommentDots />
        <FaRegCheckSquare />
      </div>
    </div>
  );
}
