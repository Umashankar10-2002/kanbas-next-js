"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store";
import * as client from "../../../client";
import { setAssignments, editAssignment } from "./reducer";

export default function AssignmentsPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const [title, setTitle] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!id) return;
      const data = await client.findAssignmentsForCourse(id);
      dispatch(setAssignments(data) as any);
    };
    load();
  }, [id, dispatch]);

  const add = async () => {
    if (!id || !title.trim()) return;
    const created = await client.createAssignmentForCourse(id, {
      title: title.trim(),
      course: id,
    });
    dispatch(setAssignments([...assignments, created]) as any);
    setTitle("");
  };

  const remove = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)) as any);
  };

  const save = async (assignment: any) => {
    const updated = await client.updateAssignment({ ...assignment, editing: false });
    dispatch(
      setAssignments(assignments.map((a: any) => (a._id === updated._id ? updated : a))) as any
    );
  };

  return (
    <div className="container mt-3">
      <h2>Assignments</h2>

      <div className="d-flex gap-2 my-3">
        <input
          className="form-control"
          placeholder="New assignment title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-danger" onClick={add}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {assignments.map((a: any) => (
          <li key={a._id} className="list-group-item d-flex justify-content-between align-items-center">
            {a.editing ? (
              <input
                className="form-control me-3"
                value={a.title}
                autoFocus
                onChange={(e) => {
                  const newTitle = e.target.value;
                  dispatch(
                    setAssignments(assignments.map((x: any) => (x._id === a._id ? { ...x, title: newTitle } : x))) as any
                  );
                }}
                onBlur={() => save(a)}
                onKeyDown={(e) => e.key === "Enter" && save(a)}
              />
            ) : (
              <span>{a.title}</span>
            )}

            <div className="d-flex gap-2">
              <button className="btn btn-light btn-sm" onClick={() => dispatch(editAssignment(a._id) as any)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => remove(a._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
