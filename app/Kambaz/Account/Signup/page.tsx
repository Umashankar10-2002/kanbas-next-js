"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signup } from "../../client";

export default function Signup() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");

    try {
      const [firstName = "", lastName = ""] = fullName.trim().split(" ");

      await signup({
        username: email || fullName, // use email as username normally
        password,
        firstName,
        lastName,
        email,
      });

      router.push("/Kambaz/Account/Profile");
    } catch (e: any) {
      setError(e?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 480, marginTop: 40 }}>
      <h2 className="mb-3">Sign Up</h2>

      {error && (
        <div className="alert alert-danger py-2">{error}</div>
      )}

      <div className="border rounded p-4 bg-white shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">Full Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="First Last"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="you@northeastern.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-danger text-white"
            onClick={handleSignup}
          >
            Create Account
          </button>
          <Link
            href="/Kambaz/Account/Signin"
            className="btn btn-light border"
          >
            Go to Signin
          </Link>
        </div>
      </div>
    </div>
  );
}
