"use client";

import { useEffect, useMemo, useState } from "react";
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
  setCourses,
} from "../Courses/courseReducer";
import type { Course } from "../data/courses";
import {
  createCourseOnServer,
  updateCourseOnServer,
  deleteCourseOnServer,
  getAllCourses,
  fetchMyCourses,
  findMyEnrollments,
  enrollInCourse,
  unenrollFromCourse,
} from "../client";

type Enrollment = {
  _id: string;
  user: string;
  course: string; // course id
};

const EMPTY_COURSE: Course = {
  id: "",
  title: "",
  code: "",
  term: "",
  color: "#c1121f",
  image: "",
};

export default function DashboardPage() {
  const dispatch = useDispatch();

  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  );

  const [course, setCourse] = useState<Course>(
    courses[0] ?? EMPTY_COURSE
  );

  // Enrollment UI state
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loadingEnroll, setLoadingEnroll] = useState<string | null>(null);

  const enrolledCourseIds = useMemo(() => {
    return new Set(enrollments.map((e) => e.course));
  }, [enrollments]);

  const onChange = (field: keyof Course, value: string) => {
    setCourse({ ...course, [field]: value });
  };

  // 🔹 Load courses depending on toggle + load enrollments
  useEffect(() => {
    const load = async () => {
      try {
        // 1) always load enrollments for button states
        const myEnrollments: Enrollment[] = await findMyEnrollments();
        setEnrollments(myEnrollments);

        // 2) load courses list (my courses by default, or all courses if toggled)
        const serverCourses: Course[] = showAllCourses
          ? await getAllCourses()
          : await fetchMyCourses();

        dispatch(setCourses(serverCourses) as any);

        // 3) set editor to first course if none
        if (!course.id && serverCourses.length > 0) {
          setCourse(serverCourses[0]);
        }
      } catch (e) {
        console.error("Error loading dashboard data", e);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, showAllCourses]);

  const refreshAfterEnrollmentChange = async () => {
    const myEnrollments: Enrollment[] = await findMyEnrollments();
    setEnrollments(myEnrollments);

    const serverCourses: Course[] = showAllCourses
      ? await getAllCourses()
      : await fetchMyCourses();
    dispatch(setCourses(serverCourses) as any);
  };

  const handleAdd = async () => {
    const { id, ...rest } = course;
    if (!rest.title && !rest.code) return;

    const created = await createCourseOnServer(rest);
    dispatch(addNewCourse(created) as any);
    setCourse(EMPTY_COURSE);
  };

  const handleUpdate = async () => {
    if (!course.id) return;
    const updated = await updateCourseOnServer(course);
    dispatch(updateCourse(updated) as any);
  };

  const handleDelete = async () => {
    if (!course.id) return;
    await deleteCourseOnServer(course.id);
    dispatch(deleteCourse(course.id) as any);
    setCourse(EMPTY_COURSE);
  };

  const handleEnrollToggle = async (c: Course) => {
    try {
      setLoadingEnroll(c.id);

      const isEnrolled = enrolledCourseIds.has(c.id);
      if (isEnrolled) {
        await unenrollFromCourse(c.id);
      } else {
        await enrollInCourse(c.id);
      }

      await refreshAfterEnrollmentChange();
    } catch (e) {
      console.error("Enrollment change failed", e);
    } finally {
      setLoadingEnroll(null);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 style={{ fontWeight: 700, marginBottom: 20 }}>Dashboard</h1>

      {/* Toggle for grading */}
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="showAllCourses"
          checked={showAllCourses}
          onChange={(e) => setShowAllCourses(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="showAllCourses">
          Show all courses (so I can enroll/unenroll)
        </label>
      </div>

      {/* ----- COURSE EDITOR ----- */}
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
          <button className="btn btn-primary me-2" onClick={handleAdd}>
            Add
          </button>

          <button className="btn btn-success me-2" onClick={handleUpdate}>
            Update
          </button>

          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* ----- CARD GRID ----- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {courses.map((c) => {
          const isEnrolled = enrolledCourseIds.has(c.id);

          return (
            <div key={c.id} style={{ position: "relative" }}>
              <Link
                href={`/Kambaz/Courses/${c.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <CourseCard course={c} />
              </Link>

              {/* Top-right controls */}
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                {/* Enroll/Unenroll (only really needed when showing all) */}
                <button
                  className={`btn btn-sm ${
                    isEnrolled ? "btn-outline-secondary" : "btn-outline-success"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleEnrollToggle(c);
                  }}
                  disabled={loadingEnroll === c.id}
                  title={isEnrolled ? "Unenroll" : "Enroll"}
                >
                  {loadingEnroll === c.id
                    ? "..."
                    : isEnrolled
                    ? "Unenroll"
                    : "Enroll"}
                </button>

                <button
                  className="btn btn-light btn-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setCourse(c);
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={async (e) => {
                    e.preventDefault();
                    await deleteCourseOnServer(c.id);
                    dispatch(deleteCourse(c.id) as any);
                    if (course.id === c.id) setCourse(EMPTY_COURSE);
                    // if course deleted, refresh enrollments/courses
                    await refreshAfterEnrollmentChange();
                  }}
                >
                  Delete
                </button>
              </div>
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
