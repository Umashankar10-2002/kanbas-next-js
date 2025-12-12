import * as dao from "./dao.js";

export default function UserRoutes(app) {
  // POST /api/users/signup
  const signup = async (req, res) => {
    const existing = await dao.findUserByUsername(req.body.username);
    if (existing) {
      res.status(400).json({ message: "Username already in use" });
      return;
    }
    const currentUser = await dao.createUser(req.body);
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  // POST /api/users/signin
  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (!currentUser) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  // POST /api/users/signout
  const signout = (req, res) => {
    req.session.destroy(() => res.sendStatus(200));
  };

  // POST /api/users/profile  (get current session user)
  const profile = (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  // PUT /api/users/profile  (update current session user)
  const updateProfile = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }

    await dao.updateUser(currentUser._id, req.body);
    const updated = await dao.findUserById(currentUser._id);

    req.session.currentUser = updated;
    res.json(updated);
  };

  // POST /api/users  (+People admin create user)
  const createUser = async (req, res) => {
    const existing = await dao.findUserByUsername(req.body.username);
    if (existing) {
      res.status(400).json({ message: "Username already in use" });
      return;
    }
    const newUser = await dao.createUser(req.body);
    res.json(newUser);
  };

  // GET /api/users (optional: supports ?role=...)
  const findAllUsers = async (req, res) => {
    const { role } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
    const users = await dao.findAllUsers();
    res.json(users);
  };

  // GET /api/users/:userId  (PeopleDetails)
  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    if (!user) {
      res.sendStatus(404);
      return;
    }
    res.json(user);
  };

  // DELETE /api/users/:userId
  const deleteUser = async (req, res) => {
    await dao.deleteUser(req.params.userId);
    res.sendStatus(200);
  };

  // PUT /api/users/:userId (admin edit)
  const updateUser = async (req, res) => {
    const userId = req.params.userId;
    await dao.updateUser(userId, req.body);
    const updated = await dao.findUserById(userId);

    // only update session if editing self
    if (req.session.currentUser?._id === userId) {
      req.session.currentUser = updated;
    }

    res.json(updated);
  };

  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
  app.put("/api/users/profile", updateProfile);

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);

  app.delete("/api/users/:userId", deleteUser);
  app.put("/api/users/:userId", updateUser);
}
