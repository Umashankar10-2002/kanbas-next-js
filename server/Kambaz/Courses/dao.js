import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAllCourses = () => model.find();

export const findCoursesByIds = (courseIds) =>
  model.find({ _id: { $in: courseIds } });

export const createCourse = (course) =>
  model.create({ _id: uuidv4(), ...course });

export const deleteCourse = (courseId) =>
  model.deleteOne({ _id: courseId });

export const updateCourse = (courseId, updates) =>
  model.updateOne({ _id: courseId }, { $set: updates });

export const findCourseById = (courseId) =>
  model.findById(courseId);
