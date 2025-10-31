"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  return (
    <div className="container">
      <h2 className="mb-3">Sign Up</h2>
      <div className="border rounded p-4 bg-white shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">Full Name</label>
          <input className="form-control" type="text" placeholder="First Last" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input className="form-control" type="email" placeholder="you@northeastern.edu" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input className="form-control" type="password" placeholder="Create a password" />
        </div>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-danger text-white"
            onClick={() => router.push("/Kambaz/Account/Profile")}
          >
            Create Account
          </button>
          <Link href="/Kambaz/Account/Signin" className="btn btn-light border">
            Go to Signin
          </Link>
        </div>
      </div>
    </div>
  );
}
