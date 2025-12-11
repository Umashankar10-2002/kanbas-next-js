"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaClipboard,
  FaRegCommentDots,
  FaRegCheckSquare,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
} from "../Courses/courseReducer";
import type { Course } from "../data/courses";

const EMPTY_COURSE: Course = {
  id: "",
  title: "",
  code: "",
  term: "",
  color: "#c1121f",
  image: "",
};

export default function DashboardPage() {
  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  );
  const dispatch = useDispatch();

  const [course, setCourse] = useState<Course>(
    courses[0] ?? EMPTY_COURSE
  );

  const onChange = (field: keyof Course, value: string) => {
    setCourse({ ...course, [field]: value });
  };

  return (
    <div id="wd-dashboard">
      <h1 style={{ fontWeight: 700, marginBottom: 20 }}>Dashboard</h1>

      {/* ----- COURSE EDITOR (no list, no edit column) ----- */}
      <div className="mb-4">
        <h5>Course Editor</h5>

        <input
          className="form-control mb-2"
          placeholder="Title"
          value={course.title}
          onChange={(e) => onChange("title", e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Code (e.g. CS5610)"
          value={course.code}
          onChange={(e) => onChange("code", e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Term (e.g. Spring 2025)"
          value={course.term}
          onChange={(e) => onChange("term", e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Color (optional, e.g. #e91e63)"
          value={course.color ?? ""}
          onChange={(e) => onChange("color", e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Image URL (optional)"
          value={course.image ?? ""}
          onChange={(e) => onChange("image", e.target.value)}
        />

        <div className="mt-2">
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              const { id, ...rest } = course;
              dispatch(addNewCourse(rest) as any);
              setCourse(EMPTY_COURSE);
            }}
          >
            Add
          </button>

          <button
            className="btn btn-success me-2"
            disabled={!course.id}
            onClick={() => {
              if (!course.id) return;
              dispatch(updateCourse(course) as any);
            }}
          >
            Update
          </button>

          <button
            className="btn btn-danger"
            disabled={!course.id}
            onClick={() => {
              if (!course.id) return;
              dispatch(deleteCourse(course.id) as any);
              setCourse(EMPTY_COURSE);
            }}
          >
            Delete
          </button>
        </div>
      </div>

      {/* ----- CARD GRID ONLY (with Edit/Delete buttons on each card) ----- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {courses.map((c) => (
          <div
            key={c.id}
            style={{ position: "relative" }}
          >
            {/* Whole card navigates to course page */}
            <Link
              href={`/Kambaz/Courses/${c.id}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <CourseCard course={c} />
            </Link>

            {/* Edit/Delete buttons on the card itself */}
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                display: "flex",
                gap: 8,
              }}
            >
              <button
                className="btn btn-light btn-sm"
                onClick={(e) => {
                  e.preventDefault(); // don’t trigger the Link
                  setCourse(c); // load into editor for editing
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteCourse(c.id) as any);
                  if (course.id === c.id) {
                    setCourse(EMPTY_COURSE);
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
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
