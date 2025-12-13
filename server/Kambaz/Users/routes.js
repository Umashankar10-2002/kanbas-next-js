// server/Kambaz/Users/routes.js
import UsersDao from "./dao.js";

let currentUser = null;

export default function UserRoutes(app, db) {
  const dao = UsersDao(db);

  // POST /api/users/signup
  const signup = (req, res) => {
    const existing = dao.findUserByUsername(req.body.username);
    if (existing) {
      res
        .status(400)
        .json({ message: "Username already in use" });
      return;
    }
    currentUser = dao.createUser(req.body);
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  // POST /api/users/signin
  const signin = (req, res) => {
    const { username, password } = req.body;
    currentUser = dao.findUserByCredentials(username, password);
    if (!currentUser) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  // POST /api/users/signout
  const signout = (req, res) => {
    currentUser = null;
    req.session.destroy(() => {
      res.sendStatus(200);
    });
  };

  // POST /api/users/profile
  const profile = (req, res) => {
    const sessionUser = req.session.currentUser || currentUser;
    if (!sessionUser) {
      res.sendStatus(401);
      return;
    }
    res.json(sessionUser);
  };

  // Optional admin helpers
  const findAllUsers = (req, res) => {
    res.json(dao.findAllUsers());
  };

  const deleteUser = (req, res) => {
    dao.deleteUser(req.params.userId);
    res.sendStatus(200);
  };
    // PUT /api/users/profile  (update profile)
  const updateProfile = (req, res) => {
    const sessionUser = req.session.currentUser || currentUser;
    if (!sessionUser) {
      res.sendStatus(401);
      return;
    }
    const updated = dao.updateUser(sessionUser._id, req.body);
    currentUser = updated;
    req.session.currentUser = updated;
    res.json(updated);
  };

  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    const updatedUser = dao.updateUser(userId, userUpdates);
    currentUser = updatedUser;
    req.session.currentUser = updatedUser;
    res.json(updatedUser);
  };

  

  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
  app.get("/api/users/profile", profile);   // ✅ add this

  app.put("/api/users/profile", updateProfile);

  app.get("/api/users", findAllUsers);
  app.delete("/api/users/:userId", deleteUser);

  app.put("/api/users/:userId", updateUser);
}
