"use client";
import React, { useState } from "react";

const REMOTE_SERVER = "http://localhost:4000";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  return (
    <div id="wd-working-with-objects" className="mt-3">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary me-2" href={ASSIGNMENT_API_URL}>
        Get Assignment
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <a
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />
    </div>
  );
}
