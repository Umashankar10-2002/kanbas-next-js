"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import * as client from "../client";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const [newUser, setNewUser] = useState<any>({
    username: "",
    password: "1234",
    firstName: "",
    lastName: "",
    role: "USER",
  });

  const loadUsers = async () => {
    const all = await client.findAllUsers();
    setUsers(all);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const full = `${u.firstName ?? ""} ${u.lastName ?? ""} ${u.username ?? ""}`.toLowerCase();
      const matchesName = full.includes(name.toLowerCase());
      const matchesRole = role ? u.role === role : true;
      return matchesName && matchesRole;
    });
  }, [users, role, name]);

  const onDelete = async (id: string) => {
    const before = users;
    setUsers((prev) => prev.filter((u) => u._id !== id)); // UI immediately ✅
    try {
      await client.deleteUser(id); // DB ✅
    } catch (e) {
      setUsers(before);
      alert("Delete failed");
    }
  };

  const onAdd = async () => {
    if (!newUser.username.trim()) {
      alert("Username required");
      return;
    }
    const created = await client.createUser(newUser);
    setUsers((prev) => [created, ...prev]); // UI immediately ✅
    setNewUser({ username: "", password: "1234", firstName: "", lastName: "", role: "USER" });
  };

  const setFirstName = (id: string, firstName: string) => {
    setUsers((prev) => prev.map((u) => (u._id === id ? { ...u, firstName } : u)));
  };

  const setLastName = (id: string, lastName: string) => {
    setUsers((prev) => prev.map((u) => (u._id === id ? { ...u, lastName } : u)));
  };

  const saveUser = async (u: any) => {
    await client.updateUser(u._id, { firstName: u.firstName, lastName: u.lastName, role: u.role });
  };

  return (
    <div>
      <h3>Users</h3>

      {/* +People (create) */}
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-success" onClick={onAdd}>
          +People
        </button>

        <input
          className="form-control"
          placeholder="username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="first name"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="last name"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />

        <select
          className="form-select"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="USER">USER</option>
          <option value="STUDENT">STUDENT</option>
          <option value="FACULTY">FACULTY</option>
          <option value="ADMIN">ADMIN</option>
          <option value="TA">TA</option>
        </select>
      </div>

      {/* Filters */}
      <div className="d-flex gap-2 mb-3">
        <input
          className="form-control"
          placeholder="Filter by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="form-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">All roles</option>
          <option value="USER">USER</option>
          <option value="STUDENT">STUDENT</option>
          <option value="FACULTY">FACULTY</option>
          <option value="ADMIN">ADMIN</option>
          <option value="TA">TA</option>
        </select>

        <button className="btn btn-secondary" onClick={loadUsers}>
          Refresh
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th style={{ width: 220 }}>First</th>
            <th style={{ width: 220 }}>Last</th>
            <th>Role</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {filtered.map((u) => (
            <tr key={u._id}>
              <td>
                {/* Clicking username -> PeopleDetails ✅ */}
                <Link href={`/Kambaz/Account/Users/${u._id}`} style={{ textDecoration: "none" }}>
                  {u.username}
                </Link>
              </td>

              {/* Edit updates UI immediately, DB on blur ✅ */}
              <td>
                <input
                  className="form-control"
                  value={u.firstName ?? ""}
                  onChange={(e) => setFirstName(u._id, e.target.value)}
                  onBlur={() => saveUser(u)}
                />
              </td>

              <td>
                <input
                  className="form-control"
                  value={u.lastName ?? ""}
                  onChange={(e) => setLastName(u._id, e.target.value)}
                  onBlur={() => saveUser(u)}
                />
              </td>

              <td>
                <select
                  className="form-select"
                  value={u.role ?? "USER"}
                  onChange={(e) => {
                    const role = e.target.value;
                    setUsers((prev) => prev.map((x) => (x._id === u._id ? { ...x, role } : x)));
                  }}
                  onBlur={() => saveUser(u)}
                >
                  <option value="USER">USER</option>
                  <option value="STUDENT">STUDENT</option>
                  <option value="FACULTY">FACULTY</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="TA">TA</option>
                </select>
              </td>

              <td className="text-end">
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(u._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
