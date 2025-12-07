"use client";

import { useParams } from "next/navigation";
import { courses } from "../../data/courses"; // Adjust path if needed

export default function CourseHome() {
  const params = useParams();

  // Normalize the ID coming from the route
  const rawId = (params as any).id;
  const id =
    typeof rawId === "string"
      ? rawId
      : Array.isArray(rawId)
      ? rawId[0]
      : "";

  const course = courses.find((c) => c.id === id);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20 }}>
      {/* ================================
          DATA-DRIVEN COURSE HEADER
      ================================= */}
      <header>
        <h1 style={{ fontWeight: 700, marginBottom: 4 }}>
          {course ? course.title : "Course"}
        </h1>

        <div style={{ color: "#6b7280" }}>
          {course ? (
            <>
              {course.code} · {course.term}
            </>
          ) : (
            <>Unknown course id: {id}</>
          )}
        </div>

        <hr style={{ marginTop: 12 }} />
      </header>

      {/* ================================
          EXISTING LAYOUT (Modules + Status)
      ================================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: 20,
          width: "100%",
        }}
      >
        {/* --------------------------------
            MODULES COLUMN
        -------------------------------- */}
        <section>
          <h2 style={{ marginBottom: 12 }}>Modules</h2>

          <div style={{ display: "grid", gap: 12 }}>
            {/* MODULE 1 */}
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#f3f4f6",
                  padding: "10px 12px",
                  fontWeight: 600,
                }}
              >
                Week 1 – Introduction
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderLeft: "4px solid #22c55e",
                    borderTop: "1px solid #f3f4f6",
                  }}
                >
                  <span>Lesson 1: Welcome &amp; Syllabus</span>
                  <span style={{ color: "#6b7280" }}>⋮</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderLeft: "4px solid #22c55e",
                    borderTop: "1px solid #f3f4f6",
                  }}
                >
                  <span>Lesson 2: Setup &amp; Tools</span>
                  <span style={{ color: "#6b7280" }}>⋮</span>
                </div>
              </div>
            </div>

            {/* MODULE 2 */}
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#f3f4f6",
                  padding: "10px 12px",
                  fontWeight: 600,
                }}
              >
                Week 2 – Basics
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderLeft: "4px solid #22c55e",
                    borderTop: "1px solid #f3f4f6",
                  }}
                >
                  <span>Lesson 1: Components &amp; Props</span>
                  <span style={{ color: "#6b7280" }}>⋮</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderLeft: "4px solid #22c55e",
                    borderTop: "1px solid #f3f4f6",
                  }}
                >
                  <span>Lesson 2: State &amp; Events</span>
                  <span style={{ color: "#6b7280" }}>⋮</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------
            COURSE STATUS COLUMN
        -------------------------------- */}
        <aside
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            minWidth: 280,
            height: "fit-content",
          }}
        >
          <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Course Status</h3>

          <div style={{ display: "grid", gap: 10 }}>
            <button
              style={{
                background: "#c1121f",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: 4,
              }}
            >
              Publish
            </button>

            <button
              style={{
                background: "#e5e7eb",
                color: "#111827",
                border: "none",
                padding: "8px 12px",
                borderRadius: 4,
              }}
            >
              Import
            </button>

            <button
              style={{
                background: "#e5e7eb",
                color: "#111827",
                border: "none",
                padding: "8px 12px",
                borderRadius: 4,
              }}
            >
              Settings
            </button>
          </div>

          <hr style={{ margin: "16px 0" }} />

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gap: 8,
            }}
          >
            <li>View Course Stream</li>
            <li>View Course Calendar</li>
            <li>Announcements</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
