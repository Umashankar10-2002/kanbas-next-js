"use client";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-danger">Assignment Editor</h2>

      <form className="border rounded p-4 shadow-sm bg-white">
        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bold">
            Assignment Name
          </label>
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="e.g. A1 - HTML"
          />
        </div>

        {/* Points */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="points" className="form-label fw-bold">
              Points
            </label>
            <input
              id="points"
              type="number"
              className="form-control"
              placeholder="100"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="group" className="form-label fw-bold">
              Assignment Group
            </label>
            <select id="group" className="form-control">
              <option>Assignments</option>
              <option>Quizzes</option>
              <option>Projects</option>
            </select>
          </div>
        </div>

        {/* Display Grade As & Submission Type */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="displayAs" className="form-label fw-bold">
              Display Grade As
            </label>
            <select id="displayAs" className="form-control">
              <option>Points</option>
              <option>Percentage</option>
              <option>Complete/Incomplete</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="submissionType" className="form-label fw-bold">
              Submission Type
            </label>
            <select id="submissionType" className="form-control">
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </select>
          </div>
        </div>

        {/* Assign Section */}
        <div className="mb-3">
          <label htmlFor="assignTo" className="form-label fw-bold">
            Assign To
          </label>
          <input
            id="assignTo"
            type="text"
            className="form-control"
            placeholder="Everyone"
          />
        </div>

        {/* Dates */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="due" className="form-label fw-bold">
              Due
            </label>
            <input id="due" type="date" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="availableFrom" className="form-label fw-bold">
              Available From
            </label>
            <input id="availableFrom" type="date" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="until" className="form-label fw-bold">
              Until
            </label>
            <input id="until" type="date" className="form-control" />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-4 gap-2">
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-danger text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
