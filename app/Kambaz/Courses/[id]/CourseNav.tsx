'use client';

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

const RED = "#c1121f";

export default function CourseNav() {
  const pathname = usePathname();
  const { id } = useParams();

  const links = [
    { label: "Home",        href: `/Kambaz/Courses/${id}` },
    { label: "Module",      href: `/Kambaz/Courses/${id}/Modules` },
    { label: "Piazza",      href: `/Kambaz/Courses/${id}/Piazza` },
    { label: "Zoom",        href: `/Kambaz/Courses/${id}/Zoom` },
    { label: "Assignments", href: `/Kambaz/Courses/${id}/Assignments` },
    { label: "Quizzes",     href: `/Kambaz/Courses/${id}/Quizzes` },
    { label: "Grades",      href: `/Kambaz/Courses/${id}/Grades` },
    { label: "People", href: `/Kambaz/Courses/${id}/People` },
  ];

  return (
    <aside
      style={{
        background: "#fff",               // rubric: white background
        width: 220,
        borderRight: "1px solid #ddd",
        padding: "16px 0",
        height: "100%",
      }}
    >
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((l) => {
          const isActive =
            pathname === l.href || (l.label === "Home" && pathname === `/Kambaz/Courses/${id}`);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                style={{
                  display: "block",
                  padding: "10px 16px",
                  textDecoration: "none",
                  // rubric: red links; active = black left border + black text
                  color: isActive ? "#000" : RED,
                  borderLeft: isActive ? "3px solid #000" : "3px solid transparent",
                }}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
