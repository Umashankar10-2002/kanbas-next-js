"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import { courses } from "../../../data/courses";
import { people, type Person } from "../../../data/people";

export default function PeoplePage() {
  const params = useParams() as { id?: string };
  const id = params.id ?? "";

  const course = courses.find((c) => c.id === id);
  const coursePeople: Person[] = people.filter((p) => p.courseId === id);

  return (
    <div className="container mt-4" id="wd-kambaz-people-screen">
      {/* Header */}
      <h2 className="mb-1">People</h2>
      {course && (
        <p className="text-muted mb-4">
          {course.title} · {course.code} · {course.term}
        </p>
      )}
      <hr />

      {/* People table */}
      <table className="table table-bordered align-middle shadow-sm mt-3">
        <thead className="table-light">
          <tr>
            <th style={{ width: "60px" }}>Profile</th>
            <th>Name</th>
            <th style={{ width: "140px" }}>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {coursePeople.map((person) => (
            <tr key={person.id}>
              <td style={{ textAlign: "center" }}>
                <FaUserCircle size={36} color="#c1121f" />
              </td>
              <td>{person.name}</td>
              <td>{person.role}</td>
              <td>
                <a
                  href={`mailto:${person.email}`}
                  style={{ color: "#c1121f" }}
                >
                  {person.email}
                </a>
              </td>
            </tr>
          ))}

          {coursePeople.length === 0 && (
            <tr>
              <td colSpan={4} className="text-muted">
                No people listed for this course.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
