"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signin } from "../../client";

export default function Signin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSignin = async () => {
    setError("");
    try {
      await signin(credentials);
      router.push("/Kambaz/Account/Profile");
    } catch (e: any) {
      setError(e?.response?.data?.message || "Sign in failed");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 480, marginTop: 40 }}>
      <h2 className="mb-3">Sign In</h2>

      {error && (
        <div className="alert alert-danger py-2">{error}</div>
      )}

      <div className="border rounded p-4 bg-white shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">Username</label>
          <input
            className="form-control"
            placeholder="iron_man"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                username: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="••••••••"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-danger text-white"
            onClick={handleSignin}
          >
            Sign In
          </button>

          <Link
            href="/Kambaz/Account/Signup"
            className="btn btn-light border"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
