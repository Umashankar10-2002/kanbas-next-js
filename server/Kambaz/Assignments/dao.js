import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAssignmentsForCourse = (courseId) =>
  model.find({ course: courseId });

export const createAssignmentForCourse = (courseId, assignment) =>
  model.create({
    _id: uuidv4(),
    course: courseId,
    title: assignment.title ?? "New Assignment",
    description: assignment.description ?? "",
    points: assignment.points ?? 100,
    dueDate: assignment.dueDate ?? "",
    availableFrom: assignment.availableFrom ?? "",
    availableUntil: assignment.availableUntil ?? "",
  });

export const updateAssignment = (assignmentId, updates) =>
  model.updateOne({ _id: assignmentId }, { $set: updates });

export const deleteAssignment = (assignmentId) =>
  model.deleteOne({ _id: assignmentId });

export const findAssignmentById = (assignmentId) =>
  model.findById(assignmentId);
