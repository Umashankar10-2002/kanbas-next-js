import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    firstName: String,
    lastName: String,
    email: String,

    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER", "TA"],
      default: "USER",
    },
  },
  { collection: "users" }
);

export default schema;
