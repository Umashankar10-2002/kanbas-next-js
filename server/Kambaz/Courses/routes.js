import * as dao from "./dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import EnrollmentModel from "../Enrollments/model.js";
import UserModel from "../Users/model.js";

export default function CourseRoutes(app) {
  // GET /api/courses
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  // GET /api/users/current/courses
  const findMyCourses = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }

    const enrollments = await enrollmentsDao.findEnrollmentsForUser(currentUser._id);
    const courseIds = enrollments.map((e) => e.course);
    const courses = await dao.findCoursesByIds(courseIds);

    res.json(courses);
  };

  // POST /api/users/current/courses  (create + auto-enroll creator)
  const createCourse = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }

    const newCourse = await dao.createCourse(req.body);

    await enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);

    res.json(newCourse);
  };

  // DELETE /api/courses/:courseId
  const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    await dao.deleteCourse(courseId);
    await enrollmentsDao.unenrollAllFromCourse(courseId);
    res.sendStatus(200);
  };

  // PUT /api/courses/:courseId
  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    await dao.updateCourse(courseId, req.body);
    const updated = await dao.findCourseById(courseId);
    res.json(updated);
  };

  // ✅ GET /api/courses/:courseId/users  -> users enrolled in this course
  const findUsersForCourse = async (req, res) => {
    const { courseId } = req.params;

    const enrollments = await EnrollmentModel.find({ course: courseId });
    const userIds = enrollments.map((e) => e.user);

    const users = await UserModel.find({ _id: { $in: userIds } });
    res.json(users);
  };

  app.get("/api/courses", findAllCourses);
  app.get("/api/users/current/courses", findMyCourses);
  app.post("/api/users/current/courses", createCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.put("/api/courses/:courseId", updateCourse);

  // People roster endpoint
  app.get("/api/courses/:courseId/users", findUsersForCourse);
}
