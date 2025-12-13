// server/Kambaz/Enrollments/routes.js
import EnrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  // POST /api/users/current/courses/:courseId/enroll
  app.post("/api/users/current/courses/:courseId/enroll", (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) return res.sendStatus(401);

    const { courseId } = req.params;
    const created = dao.enrollUserInCourse(currentUser._id, courseId);
    if (!created) return res.status(409).send("Already enrolled");
    res.json(created);
  });

  // DELETE /api/users/current/courses/:courseId/unenroll
  app.delete("/api/users/current/courses/:courseId/unenroll", (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) return res.sendStatus(401);

    const { courseId } = req.params;
    const ok = dao.unenrollUserFromCourse(currentUser._id, courseId);
    res.sendStatus(ok ? 200 : 404);
  });

  // GET /api/users/current/enrollments
  app.get("/api/users/current/enrollments", (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) return res.sendStatus(401);

    res.json(dao.findEnrollmentsForUser(currentUser._id));
  });
}
