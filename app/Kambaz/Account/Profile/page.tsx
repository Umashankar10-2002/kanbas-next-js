"use client";

import { useEffect, useState } from "react";
import { profile, signout, updateUser } from "../../client";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });
  const [message, setMessage] = useState("");

  const loadProfile = async () => {
    try {
      const current = await profile();
      setUser(current);
      setForm({
        firstName: current.firstName || "",
        lastName: current.lastName || "",
        email: current.email || "",
        username: current.username || "",
      });
    } catch {
      router.push("/Kambaz/Account/Signin");
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleSignout = async () => {
    await signout();
    router.push("/Kambaz/Account/Signin");
  };

  const handleSave = async () => {
    if (!user) return;
    setMessage("");

    const updated = await updateUser({
      ...user,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      username: form.username,
    });

    setUser(updated);
    setMessage("Profile updated");
  };

  if (!user) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Profile</h2>

      {message && (
        <div className="alert alert-success py-2">{message}</div>
      )}

      <div className="border rounded p-4 bg-white shadow-sm mb-4">
        <div className="mb-3">
          <label className="form-label fw-bold">Username</label>
          <input
            className="form-control"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
        </div>

        <div className="mb-3 d-flex gap-2">
          <div className="flex-fill">
            <label className="form-label fw-bold">First Name</label>
            <input
              className="form-control"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />
          </div>
          <div className="flex-fill">
            <label className="form-label fw-bold">Last Name</label>
            <input
              className="form-control"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            className="form-control"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={handleSave}>
            Save Profile
          </button>
          <button className="btn btn-outline-danger" onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      </div>

      <h5>Raw User JSON (for debugging)</h5>
      <pre className="bg-light p-3 border rounded small">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
