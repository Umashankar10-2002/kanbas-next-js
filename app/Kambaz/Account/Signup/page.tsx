"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export default function Signup() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/Kambaz/Account/Profile");
  }

  return (
    <div className="container">
      <h2 className="mb-3">Sign Up</h2>
      <form className="border rounded p-4 bg-white shadow-sm" onSubmit={handleSubmit}>
        {/* form fields... */}
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-danger text-white">Create Account</button>
          <Link href="/Kambaz/Account/Signin" className="btn btn-light border">Go to Signin</Link>
        </div>
      </form>
    </div>
  );
}
