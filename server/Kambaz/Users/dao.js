import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

// Mongo/Mongoose DAO (no db.js)
export const createUser = (user) => model.create({ ...user, _id: uuidv4() });

export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);

export const findUserByUsername = (username) =>
  model.findOne({ username });

export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

export const findUsersByRole = (role) => model.find({ role });

export const updateUser = (userId, updates) =>
  model.updateOne({ _id: userId }, { $set: updates });

export const deleteUser = (userId) =>
  model.deleteOne({ _id: userId });
