"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";

export default function PeoplePage() {
  const people = [
    { name: "Umashankar Tamilarasu", role: "Student", email: "tamilarasu.u@northeastern.edu" },
    { name: "Janani Murugesan", role: "Student", email: "murugesan.j@northeastern.edu" },
    { name: "Dr. Emily Brown", role: "Instructor", email: "emily@northeastern.edu" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">People</h2>

      <table className="table table-bordered align-middle shadow-sm">
        <thead className="table-light">
          <tr>
            <th style={{ width: "60px" }}>Profile</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>
                <FaUserCircle size={36} color="#c1121f" />
              </td>
              <td>{person.name}</td>
              <td>{person.role}</td>
              <td>
                <a href={`mailto:${person.email}`} style={{ color: "#c1121f" }}>
                  {person.email}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
