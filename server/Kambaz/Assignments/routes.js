// server/Kambaz/Assignments/routes.js
import AssignmentsDao from "./dao.js";

export default function AssignmentsRoutes(app, db) {
  const dao = AssignmentsDao(db);

  // GET /api/courses/:courseId/assignments
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    res.json(dao.findAssignmentsForCourse(courseId));
  });

  // POST /api/courses/:courseId/assignments
  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const created = dao.createAssignment({
      ...req.body,
      course: courseId,
    });
    res.json(created);
  });

  // PUT /api/assignments/:assignmentId
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const updated = dao.updateAssignment(assignmentId, req.body);
    if (!updated) return res.sendStatus(404);
    res.json(updated);
  });

  // DELETE /api/assignments/:assignmentId
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    dao.deleteAssignment(assignmentId);
    res.sendStatus(200);
  });
}
