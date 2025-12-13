"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import type { RootState } from "../../store";
import type { Course } from "../../data/courses";
import {
  addModule,
  deleteModule,
  editModule,
  updateModule,
  Module,
} from "./Modules/reducer";

export default function CoursePage() {
  const params = useParams<{ id: string }>();
  const courseId = params?.id as string;

  const dispatch = useDispatch();

  const course = useSelector((state: RootState) =>
    state.coursesReducer.courses.find(
      (c: Course) => c.id === courseId
    )
  );

  const modules = useSelector((state: RootState) =>
    state.modulesReducer.modules.filter(
      (m: Module) => m.course === courseId
    )
  );

  const [moduleName, setModuleName] = useState("");

  if (!course) {
    return (
      <div className="p-3">
        <h2>Course not found</h2>
        <Link href="/Kambaz/Dashboard" className="btn btn-primary mt-2">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const handleAddModule = () => {
    const name = moduleName.trim();
    if (!name) return;
    dispatch(addModule({ name, course: courseId }) as any);
    setModuleName("");
  };

  return (
    <div className="p-3" id="wd-course-page">
      {/* Header bar with color */}
      <div
        style={{
          height: 140,
          borderRadius: 10,
          marginBottom: 16,
          background: course.image
            ? `url(${course.image}) center/cover no-repeat`
            : course.color || "#c1121f",
        }}
      />

      <h1 style={{ fontWeight: 700 }}>{course.title}</h1>
      <div style={{ color: "#6b7280", marginBottom: 8 }}>
        {course.code}
        {course.term ? ` • ${course.term}` : null}
      </div>

      <div className="mb-3">
        <Link href="/Kambaz/Dashboard" className="btn btn-outline-secondary">
          Back to Dashboard
        </Link>
      </div>

      <hr />

      {/* ================== MODULES SECTION ================== */}
      <h4>Modules</h4>

      {/* Controls */}
      <div className="mb-3 d-flex gap-2">
        <input
          className="form-control"
          placeholder="New module name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddModule}>
          Add
        </button>
      </div>

      {/* List */}
      <ul className="list-group" id="wd-modules">
        {modules.length === 0 && (
          <li className="list-group-item text-muted">
            No modules yet. Add one above.
          </li>
        )}

        {modules.map((m: Module) => (
          <li
            key={m._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div style={{ flex: 1, marginRight: 12 }}>
              {m.editing ? (
                <input
                  className="form-control"
                  value={m.name}
                  onChange={(e) =>
                    dispatch(
                      updateModule({ ...m, name: e.target.value }) as any
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(
                        updateModule({ ...m, editing: false }) as any
                      );
                    }
                  }}
                />
              ) : (
                <span>{m.name}</span>
              )}
            </div>

            <div className="btn-group btn-group-sm">
              <button
                className="btn btn-outline-secondary"
                onClick={() =>
                  m.editing
                    ? dispatch(
                        updateModule({ ...m, editing: false }) as any
                      )
                    : dispatch(editModule(m._id) as any)
                }
              >
                {m.editing ? "Save" : "Edit"}
              </button>

              <button
                className="btn btn-outline-danger"
                onClick={() => dispatch(deleteModule(m._id) as any)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
