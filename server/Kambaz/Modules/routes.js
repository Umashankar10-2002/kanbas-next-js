import * as dao from "./dao.js";

export default function ModulesRoutes(app) {
  // GET /api/courses/:courseId/modules
  const findModulesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const modules = await dao.findModulesForCourse(courseId);
    res.json(modules);
  };

  // POST /api/courses/:courseId/modules
  const createModuleForCourse = async (req, res) => {
    const { courseId } = req.params;
    const created = await dao.createModuleForCourse(courseId, req.body);
    res.json(created);
  };

  // PUT /api/modules/:moduleId
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    await dao.updateModule(moduleId, req.body);
    const updated = await dao.findModuleById(moduleId);
    res.json(updated);
  };

  // DELETE /api/modules/:moduleId
  const deleteModule = async (req, res) => {
    const { moduleId } = req.params;
    await dao.deleteModule(moduleId);
    res.sendStatus(200);
  };

  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/modules", createModuleForCourse);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}
