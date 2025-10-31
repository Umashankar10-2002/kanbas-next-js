"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="container py-4">
      <h2 className="mb-3">Profile</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form>
            {/* Row 1 */}
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="username" className="form-label fw-bold">Username</label>
                <input id="username" className="form-control" defaultValue="student1" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input id="email" type="email" className="form-control" defaultValue="student@example.com" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="row g-3 mt-1">
              <div className="col-md-6">
                <label htmlFor="first" className="form-label fw-bold">First Name</label>
                <input id="first" className="form-control" defaultValue="John" />
              </div>
              <div className="col-md-6">
                <label htmlFor="last" className="form-label fw-bold">Last Name</label>
                <input id="last" className="form-control" defaultValue="Doe" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="row g-3 mt-1">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label fw-bold">Password</label>
                <input id="password" type="password" className="form-control" defaultValue="1234" />
              </div>
              <div className="col-md-6">
                <label htmlFor="dob" className="form-label fw-bold">Date of Birth</label>
                <input id="dob" type="date" className="form-control" defaultValue="2000-01-21" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="row g-3 mt-1">
              <div className="col-md-6">
                <label htmlFor="role" className="form-label fw-bold">Role</label>
                <select id="role" defaultValue="STUDENT" className="form-control">
                  <option value="STUDENT">Student</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="ADMIN">Admin</option>
                  <option value="TA">TA</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <Link href="/Kambaz/Account/Signin" className="btn btn-light border">
                Sign out
              </Link>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-danger text-white">Save Profile</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
