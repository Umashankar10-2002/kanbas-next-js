import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findModulesForCourse = (courseId) =>
  model.find({ course: courseId });

export const createModuleForCourse = (courseId, module) =>
  model.create({
    _id: uuidv4(),
    course: courseId,
    name: module.name ?? "New Module",
    description: module.description ?? "",
    order: module.order ?? 0,
  });

export const updateModule = (moduleId, updates) =>
  model.updateOne({ _id: moduleId }, { $set: updates });

export const deleteModule = (moduleId) =>
  model.deleteOne({ _id: moduleId });

export const findModuleById = (moduleId) =>
  model.findById(moduleId);
