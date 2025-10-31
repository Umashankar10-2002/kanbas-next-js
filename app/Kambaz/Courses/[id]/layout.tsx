import CourseNav from "./CourseNav";

export default function CourseLayout({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        minHeight: "100%",
        background: "#f9fafb",
      }}
    >
      <CourseNav />
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}
