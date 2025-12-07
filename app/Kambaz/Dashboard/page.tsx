// app/Kambaz/Dashboard/page.tsx
import Link from "next/link";
import {
  FaClipboard,
  FaRegCommentDots,
  FaRegCheckSquare,
} from "react-icons/fa";
import { courses, Course } from "../data/courses";

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
          <Link
            key={c.id}
            href={`/Kambaz/Courses/${c.id}`} // ✅ use the same id as in data
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CourseCard course={c} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)",
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
          <span style={{ marginLeft: 6, color: "#9ca3af" }}>
            {course.term}
          </span>
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
