import { ReactNode } from "react";
import CourseNav from "./CourseNav";

export default function CourseLayout(
  { children }: { children: ReactNode }
) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        minHeight: "100%",
      }}
    >
      <CourseNav />
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}
