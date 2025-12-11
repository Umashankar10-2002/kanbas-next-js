// server/Kambaz/Enrollments/dao.js
import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    enrollments.push({
      _id: uuidv4(),
      user: userId,
      course: courseId,
    });
  }

  function findEnrollmentsForUser(userId) {
    const { enrollments } = db;
    return enrollments.filter((e) => e.user === userId);
  }

  return {
    enrollUserInCourse,
    findEnrollmentsForUser,
  };
}
