import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // GET /api/users/current/enrollments
  const findMyEnrollments = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const enrollments = await dao.findEnrollmentsForUser(currentUser._id);
    res.json(enrollments);
  };

  // POST /api/users/current/courses/:courseId/enroll
  const enroll = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const { courseId } = req.params;
    const e = await dao.enrollUserInCourse(currentUser._id, courseId);
    res.json(e); // can be null if already enrolled
  };

  // DELETE /api/users/current/courses/:courseId/enroll
  const unenroll = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const { courseId } = req.params;
    await dao.unenrollUserFromCourse(currentUser._id, courseId);
    res.sendStatus(200);
  };

  // GET /api/courses/:courseId/enrollments  (Course/People table later)
  const findEnrollmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
    const enrollments = await dao.findEnrollmentsForCourse(courseId);
    res.json(enrollments);
  };

  app.get("/api/users/current/enrollments", findMyEnrollments);
  app.post("/api/users/current/courses/:courseId/enroll", enroll);
  app.delete("/api/users/current/courses/:courseId/enroll", unenroll);
  app.get("/api/courses/:courseId/enrollments", findEnrollmentsForCourse);
}
