"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export default function Signin() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/Kambaz/Account/Profile");
  }

  return (
    <div className="container">
      <h2 className="mb-3">Sign In</h2>
      <form className="border rounded p-4 bg-white shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input className="form-control" type="email" placeholder="you@northeastern.edu" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input className="form-control" type="password" placeholder="••••••••" />
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-danger text-white">Sign In</button>
          <Link href="/Kambaz/Account/Signup" className="btn btn-light border">Go to Signup</Link>
        </div>
      </form>
    </div>
  );
}
