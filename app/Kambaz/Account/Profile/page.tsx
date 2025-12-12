"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { profile, signout, updateUser } from "../../client";

type User = {
  _id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
};

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadProfile = async () => {
    try {
      const current = await profile();
      setUser(current);
      setForm({
        username: current.username || "",
        firstName: current.firstName || "",
        lastName: current.lastName || "",
        email: current.email || "",
      });
    } catch {
      router.push("/Kambaz/Account/Signin");
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [field]: e.target.value });
    };

  const handleSave = async () => {
    if (!user || !user._id) return;
    setMessage("");
    setError("");

    try {
      const updated = await updateUser({
        ...user,
        username: form.username,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
      });
      setUser(updated);
      setMessage("Profile updated");
    } catch (e: any) {
      setError(e?.response?.data?.message || "Could not update profile");
    }
  };

  const handleSignout = async () => {
    await signout();
    router.push("/Kambaz/Account/Signin");
  };

  if (!user) {
    return (
      <div className="container" style={{ marginTop: 40 }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: 640, marginTop: 40 }}>
      <h2 className="mb-3">Profile</h2>

      {message && (
        <div className="alert alert-success py-2">{message}</div>
      )}
      {error && (
        <div className="alert alert-danger py-2">{error}</div>
      )}

      <div className="border rounded p-4 bg-white shadow-sm mb-3">
        <div className="mb-3">
          <label className="form-label fw-bold">Username</label>
          <input
            className="form-control"
            value={form.username}
            onChange={handleChange("username")}
          />
        </div>

        <div className="row mb-3 g-2">
          <div className="col-md-6">
            <label className="form-label fw-bold">First Name</label>
            <input
              className="form-control"
              value={form.firstName}
              onChange={handleChange("firstName")}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Last Name</label>
            <input
              className="form-control"
              value={form.lastName}
              onChange={handleChange("lastName")}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            className="form-control"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={handleSave}>
            Save Profile
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
