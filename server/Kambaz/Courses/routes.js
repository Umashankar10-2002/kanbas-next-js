// server/Kambaz/Courses/routes.js
import CoursesDao from "./dao.js";
import EnrollmentsDao from "../Enrollments/dao.js";

export default function CourseRoutes(app, db) {
  const dao = CoursesDao(db);
  const enrollmentsDao = EnrollmentsDao(db);

  // GET /api/courses  (optional admin/debug)
  const findAllCourses = (req, res) => {
    res.json(dao.findAllCourses());
  };

  // GET /api/users/current/courses
  const findMyCourses = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const courses = dao.findCoursesForEnrolledUser(currentUser._id);
    res.json(courses);
  };

  // POST /api/users/current/courses  – create + enroll current user
  const createCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const newCourse = dao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(
      currentUser._id,
      newCourse._id
    );
    res.json(newCourse);
  };

  // DELETE /api/courses/:courseId
  const deleteCourse = (req, res) => {
    const { courseId } = req.params;
    dao.deleteCourse(courseId);
    res.sendStatus(200);
  };

  // PUT /api/courses/:courseId
  const updateCourse = (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = dao.updateCourse(courseId, courseUpdates);
    res.send(status ? 200 : 404);
  };

  app.get("/api/courses", findAllCourses);
  app.get("/api/users/current/courses", findMyCourses);
  app.post("/api/users/current/courses", createCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.put("/api/courses/:courseId", updateCourse);
}
