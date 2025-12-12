import ModulesDao from "./dao.js";

export default function ModulesRoutes(app, db) {
  const dao = ModulesDao(db);

  // GET all modules for a course
  // GET /api/courses/:courseId/modules
  const findModulesForCourse = (req, res) => {
    const { courseId } = req.params;
    const modules = dao.findModulesForCourse(courseId);
    res.json(modules);
  };

  // CREATE module
  // POST /api/courses/:courseId/modules
  const createModule = (req, res) => {
    const { courseId } = req.params;
    const module = dao.createModule({
      ...req.body,
      course: courseId,
    });
    res.json(module);
  };

  // UPDATE module
  // PUT /api/modules/:moduleId
  const updateModule = (req, res) => {
    const { moduleId } = req.params;
    const status = dao.updateModule(moduleId, req.body);
    res.send(status);
  };

  // DELETE module
  // DELETE /api/modules/:moduleId
  const deleteModule = (req, res) => {
    const { moduleId } = req.params;
    const status = dao.deleteModule(moduleId);
    res.send(status);
  };

  // 🔴 ROUTE REGISTRATION (THIS IS REQUIRED)
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/modules", createModule);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}
