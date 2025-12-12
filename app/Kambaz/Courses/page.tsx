"use client";

import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { setCourses } from "./courseReducer";
import type { Course } from "../data/courses";
import Link from "next/link";
import {
  FaClipboard,
  FaRegCommentDots,
  FaRegCheckSquare,
} from "react-icons/fa";
import {
  getAllCourses,
  findMyEnrollments,
  enrollInCourse,
  unenrollFromCourse,
} from "../client";

type Enrollment = {
  _id: string;
  user: string;
  course: string; // courseId
};

export default function CoursesPage() {
  const dispatch = useDispatch();

  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  );

  // ✅ All Courses / My Courses toggle
  const [showAllCourses, setShowAllCourses] = useState(true);

  // ✅ enrollments for current user
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loadingEnroll, setLoadingEnroll] = useState<string | null>(null);

  const enrolledCourseIds = useMemo(() => {
    return new Set(enrollments.map((e) => e.course));
  }, [enrollments]);

  const visibleCourses = useMemo(() => {
    if (showAllCourses) return courses;
    return courses.filter((c: any) => enrolledCourseIds.has(c.id ?? c._id));
  }, [showAllCourses, courses, enrolledCourseIds]);

  const load = async () => {
    try {
      const [allCourses, myEnrollments] = await Promise.all([
        getAllCourses(),
        findMyEnrollments(),
      ]);
      dispatch(setCourses(allCourses) as any);
      setEnrollments(myEnrollments);
    } catch (e) {
      console.error("Error loading Courses page data", e);
    }
  };

  // 🔹 Load courses + enrollments
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleEnrollToggle = async (c: Course) => {
    try {
      setLoadingEnroll(c.id);
      const isEnrolled = enrolledCourseIds.has(c.id);

      if (isEnrolled) {
        await unenrollFromCourse(c.id);   // DELETE .../enroll
      } else {
        await enrollInCourse(c.id);       // POST .../enroll
      }

      // refresh enrollments (and keep courses list)
      const myEnrollments = await findMyEnrollments();
      setEnrollments(myEnrollments);
    } catch (e) {
      console.error("Enrollment change failed", e);
    } finally {
      setLoadingEnroll(null);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 style={{ fontWeight: 700, marginBottom: 0 }}>Courses</h1>

        {/* ✅ Rubric: All Courses / My Courses buttons top right */}
        <div className="d-flex gap-2">
          <button
            className={`btn ${!showAllCourses ? "btn-primary" : "btn-outline-secondary"}`}
            onClick={() => setShowAllCourses(false)}
          >
            My Courses
          </button>
          <button
            className={`btn ${showAllCourses ? "btn-primary" : "btn-outline-secondary"}`}
            onClick={() => setShowAllCourses(true)}
          >
            All Courses
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {visibleCourses.map((course: Course) => {
          const isEnrolled = enrolledCourseIds.has(course.id);

          return (
            <div key={course.id} style={{ position: "relative" }}>
              <Link
                href={`/Kambaz/Courses/${course.id}`}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <CourseCard course={course} />
              </Link>
            </div>
          );
        })}
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
