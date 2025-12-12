// server/Kambaz/Courses/routes.js
import CoursesDao from "./dao.js";
import EnrollmentsDao from "../Enrollments/dao.js";
import ModulesDao from "../Modules/dao.js";


export default function CourseRoutes(app, db) {
  const dao = CoursesDao(db);
  const enrollmentsDao = EnrollmentsDao(db);
  const modulesDao = ModulesDao(db);


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
  if (!status) {
    res.sendStatus(404);
    return;
  }

  // Find the updated course in the in-memory DB and return it
  const updatedCourse =
    db.courses.find((c) => c._id === courseId || c.id === courseId);

  if (!updatedCourse) {
    res.sendStatus(404);
    return;
  }

  res.json(updatedCourse);
};

  // POST /api/courses/:courseId/modules
  const createModuleForCourse = (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  };



  app.get("/api/courses", findAllCourses);
  app.get("/api/users/current/courses", findMyCourses);
  app.post("/api/users/current/courses", createCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.post("/api/courses/:courseId/modules", createModuleForCourse);
}
