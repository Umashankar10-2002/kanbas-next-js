// server/Kambaz/Users/dao.js
import { v4 as uuidv4 } from "uuid";

export default function UsersDao(db) {
  let { users } = db;

  const createUser = (user) => {
    const newUser = { ...user, _id: uuidv4() };
    users = [...users, newUser];
    db.users = users; // keep db in sync
    return newUser;
  };

  const findAllUsers = () => users;

  const findUserById = (userId) =>
    users.find((user) => user._id === userId);

  const findUserByUsername = (username) =>
    users.find((user) => user.username === username);

  const findUserByCredentials = (username, password) =>
    users.find(
      (user) =>
        user.username === username && user.password === password
    );

  const updateUser = (userId, updates) => {
    users = users.map((user) =>
      user._id === userId ? { ...user, ...updates } : user
    );
    db.users = users;
    return users.find((user) => user._id === userId);
  };

  const deleteUser = (userId) => {
    users = users.filter((user) => user._id !== userId);
    db.users = users;
  };

  return {
    createUser,
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    updateUser,
    deleteUser,
  };
}
