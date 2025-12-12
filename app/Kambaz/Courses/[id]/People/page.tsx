"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { findUsersForCourse } from "../../../client"; // adjust if needed

export default function PeoplePage() {
  const params = useParams<{ id: string }>();
  const courseId = params.id;

  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const users = await findUsersForCourse(courseId);
      setPeople(users);
    };
    load();
  }, [courseId]);

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
          {people.map((p) => (
            <tr key={p._id}>
              <td style={{ textAlign: "center" }}>
                <FaUserCircle size={36} color="#c1121f" />
              </td>
              <td>{`${p.firstName ?? ""} ${p.lastName ?? ""}`.trim() || p.username}</td>
              <td>{p.role}</td>
              <td>
                {p.email ? (
                  <a href={`mailto:${p.email}`} style={{ color: "#c1121f" }}>
                    {p.email}
                  </a>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
