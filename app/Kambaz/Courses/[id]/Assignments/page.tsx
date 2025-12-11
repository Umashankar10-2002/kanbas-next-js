"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaPlus, FaClipboardList } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import type { RootState } from "../../../store";
import {
  addAssignment,
  deleteAssignment,
  editAssignment,
  updateAssignment,
  toggleCompleted,
  Assignment,
} from "./reducer";

export default function AssignmentsPage() {
  const params = useParams<{ id: string }>();
  const courseId = params.id as string;

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const assignments = useSelector((state: RootState) =>
    state.assignmentsReducer.assignments.filter(
      (a: Assignment) => a.course === courseId
    )
  );

  const filteredAssignments = assignments.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddAssignment = () => {
    const title = newTitle.trim();
    if (!title) return;
    dispatch(addAssignment({ title, course: courseId }) as any);
    setNewTitle("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Assignments</h2>

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div>
          <button className="btn btn-light border me-2 text-danger d-inline-flex align-items-center gap-2">
            <FaPlus /> Group
          </button>
          <button
            className="btn btn-danger text-white d-inline-flex align-items-center gap-2"
            onClick={handleAddAssignment}
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>

      {/* New assignment title input */}
      <div className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="New assignment title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddAssignment}>
          Add
        </button>
      </div>

      {/* Assignment List */}
      <div className="list-group">
        {filteredAssignments.length === 0 && (
          <div className="list-group-item text-muted">
            No assignments yet. Add one above.
          </div>
        )}

        {filteredAssignments.map((a) => (
          <div
            key={a._id}
            className="list-group-item p-3 mb-3 border-0 shadow-sm"
            style={{
              borderLeft: "6px solid #22c55e",
              borderRadius: "8px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-start gap-3">
                <input
                  className="form-check-input mt-1"
                  type="checkbox"
                  checked={!!a.completed}
                  onChange={() =>
                    dispatch(toggleCompleted(a._id) as any)
                  }
                />
                <FaClipboardList size={22} color="#c1121f" />
                <div>
                  {a.editing ? (
                    <input
                      className="form-control mb-1"
                      value={a.title}
                      onChange={(e) =>
                        dispatch(
                          updateAssignment({
                            ...a,
                            title: e.target.value,
                          }) as any
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(
                            updateAssignment({
                              ...a,
                              editing: false,
                            }) as any
                          );
                        }
                      }}
                    />
                  ) : (
                    <h5 className="mb-1 text-danger">{a.title}</h5>
                  )}
                  {/* You can later add due dates, points, groups into the model if needed */}
                  <small className="text-muted">
                  Not available until at 12:00 am | Due 2025-12-12 at 11:59 pm | 50 pts
                  </small>
                </div>
              </div>

              <div className="btn-group btn-group-sm">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    a.editing
                      ? dispatch(
                          updateAssignment({
                            ...a,
                            editing: false,
                          }) as any
                        )
                      : dispatch(editAssignment(a._id) as any)
                  }
                >
                  {a.editing ? "Save" : "Edit"}
                </button>

                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    dispatch(deleteAssignment(a._id) as any)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional back link */}
      <div className="mt-3">
        <Link
          href={`/Kambaz/Courses/${courseId}`}
          className="btn btn-outline-secondary btn-sm"
        >
          Back to Course
        </Link>
      </div>
    </div>
  );
}
