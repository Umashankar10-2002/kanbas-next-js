"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaPlus, FaClipboardList } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";

import { courses } from "../../../data/courses";
import {
  assignments as allAssignments,
  type Assignment,
} from "../../../data/assignments";

export default function AssignmentsPage() {
  const params = useParams() as { id?: string };
  const id = params.id ?? "";

  const course = courses.find((c) => c.id === id);
  const assignments: Assignment[] = allAssignments.filter(
    (a) => a.courseId === id
  );

  return (
    <div className="container mt-4" id="wd-kambaz-assignments-screen">
      {/* Course header */}
      <h2 className="mb-1">Assignments</h2>
      {course && (
        <p className="text-muted mb-4">
          {course.title} · {course.code} · {course.term}
        </p>
      )}

      {/* Top Action Row */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search Bar */}
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch color="#6c757d" />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search for Assignment"
          />
        </div>

        {/* Buttons */}
        <div>
          <button className="btn btn-light border me-2 text-danger d-inline-flex align-items-center gap-2">
            <FaPlus /> Group
          </button>
          <button className="btn btn-danger text-white d-inline-flex align-items-center gap-2">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>

      {/* Assignment List */}
      <div className="list-group">
        {assignments.map((a) => (
          <div
            key={a.id}
            className="list-group-item p-3 mb-3 border-0 shadow-sm"
            style={{
              borderLeft: "6px solid #22c55e", // green border
              borderRadius: "8px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <FaClipboardList size={22} color="#c1121f" />
                <div>
                  <h5 className="mb-1 text-danger">{a.title}</h5>
                  <small className="text-muted">
                    Due {a.due} • {a.points} pts • {a.group}
                  </small>
                </div>
              </div>

              <Link
                href={`/Kambaz/Courses/${id}/Assignments/${a.id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}

        {assignments.length === 0 && (
          <div className="text-muted mt-3">No assignments for this course.</div>
        )}
      </div>
    </div>
  );
}
