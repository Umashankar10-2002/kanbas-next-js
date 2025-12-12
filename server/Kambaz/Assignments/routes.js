import * as dao from "./dao.js";

export default function AssignmentsRoutes(app) {
  // GET /api/courses/:courseId/assignments
  const findAssignmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  };

  // POST /api/courses/:courseId/assignments
  const createAssignmentForCourse = async (req, res) => {
    const { courseId } = req.params;
    const created = await dao.createAssignmentForCourse(courseId, req.body);
    res.json(created);
  };

  // PUT /api/assignments/:assignmentId
  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    await dao.updateAssignment(assignmentId, req.body);
    const updated = await dao.findAssignmentById(assignmentId);
    res.json(updated);
  };

  // DELETE /api/assignments/:assignmentId
  const deleteAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    await dao.deleteAssignment(assignmentId);
    res.sendStatus(200);
  };

  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
}
