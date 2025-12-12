import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findEnrollmentsForUser = (userId) =>
  model.find({ user: userId });

export const isUserEnrolledInCourse = async (userId, courseId) => {
  const e = await model.findOne({ user: userId, course: courseId });
  return !!e;
};

export const enrollUserInCourse = async (userId, courseId) => {
  const exists = await model.findOne({ user: userId, course: courseId });
  if (exists) return null;
  return model.create({ _id: uuidv4(), user: userId, course: courseId });
};

export const unenrollUserFromCourse = async (userId, courseId) => {
  const result = await model.deleteOne({ user: userId, course: courseId });
  return result.deletedCount > 0;
};

// ✅ needed when deleting a course
export const unenrollAllFromCourse = async (courseId) => {
  await model.deleteMany({ course: courseId });
};

// ✅ used for Course/People roster (later)
export const findEnrollmentsForCourse = (courseId) =>
  model.find({ course: courseId });
