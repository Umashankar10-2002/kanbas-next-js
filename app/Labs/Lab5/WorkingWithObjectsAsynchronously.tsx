// app/Labs/Lab5/WorkingWithObjectsAsynchronously.tsx
"use client";

import React, { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});
  const [title, setTitle] = useState("");

  const loadAssignment = async () => {
    const data = await client.fetchAssignment();
    setAssignment(data);
    setTitle(data.title);
  };

  const saveTitle = async () => {
    const updated = await client.updateTitle(title);
    setAssignment(updated);
  };

  useEffect(() => {
    loadAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects" className="mt-3">
      <h3>Working with Objects Asynchronously</h3>

      <h4>Current Assignment</h4>
      <pre className="border rounded p-2 bg-light">
        {JSON.stringify(assignment, null, 2)}
      </pre>

      <h4 className="mt-3">Edit Title (Async)</h4>
      <div className="d-flex gap-2">
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={saveTitle}>
          Save Title
        </button>
      </div>
    </div>
  );
}
