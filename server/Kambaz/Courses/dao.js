// server/Kambaz/Courses/dao.js
import { v4 as uuidv4 } from "uuid";

export default function CoursesDao(db) {
  function findAllCourses() {
    return db.courses;
  }

  function findCoursesForEnrolledUser(userId) {
    const { courses, enrollments } = db;

    const myEnrollments = enrollments.filter(
      (e) => e.user === userId
    );
    const enrolledCourseIds = myEnrollments.map((e) => e.course);

    return courses.filter((c) => enrolledCourseIds.includes(c._id));
  }

  function createCourse(course) {
    const newCourse = {
      _id: uuidv4(),
      ...course,
    };
    db.courses.push(newCourse);
    return newCourse;
  }

  function deleteCourse(courseId) {
    const { courses, enrollments } = db;
    db.courses = courses.filter((c) => c._id !== courseId);
    db.enrollments = enrollments.filter(
      (e) => e.course !== courseId
    );
  }

  function updateCourse(courseId, courseUpdates) {
    const { courses } = db;
    const course = courses.find((c) => c._id === courseId);
    if (!course) return null;
    Object.assign(course, courseUpdates);
    return course;
  }

  return {
    findAllCourses,
    findCoursesForEnrolledUser,
    createCourse,
    deleteCourse,
    updateCourse,
  };
}
