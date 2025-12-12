// server/Kambaz/Modules/dao.js
import { v4 as uuidv4 } from "uuid";

export default function ModulesDao(db) {
  // CREATE
  function createModule(module) {
    const newModule = { ...module, _id: uuidv4() };
    db.modules = [...db.modules, newModule];
    return newModule;
  }

  // READ – all modules for one course
  function findModulesForCourse(courseId) {
    const { modules } = db;
    return modules.filter((module) => module.course === courseId);
  }

  // DELETE
  function deleteModule(moduleId) {
    const { modules } = db;
    db.modules = modules.filter((module) => module._id !== moduleId);
    // return true/false if needed
    return true;
  }

  // UPDATE
  function updateModule(moduleId, moduleUpdates) {
    const { modules } = db;
    const module = modules.find((m) => m._id === moduleId);
    if (!module) return null;
    Object.assign(module, moduleUpdates);
    return module;
  }

  return {
    createModule,
    findModulesForCourse,
    deleteModule,
    updateModule,
  };
}
