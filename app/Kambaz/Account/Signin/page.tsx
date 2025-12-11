"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signin } from "../../client"; 

export default function Signin() {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSignin = async () => {
    try {
      setError("");
      await signin(credentials);  
      router.push("/Kambaz/Account/Profile"); 
    } catch (e: any) {
      setError(e?.response?.data?.message || "Invalid username or password");
    }
  };

  return (
    <div className="container">
      <h2 className="mb-3">Sign In</h2>

      <div className="border rounded p-4 bg-white shadow-sm">
        {error && (
          <div className="alert alert-danger py-2">{error}</div>
        )}

        <div className="mb-3">
          <label className="form-label fw-bold">Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="iron_man"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
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
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-danger text-white"
            onClick={handleSignin}   // ← NOW REAL LOGIN
          >
            Sign In
          </button>

          <Link href="/Kambaz/Account/Signup" className="btn btn-light border">
            Go to Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
