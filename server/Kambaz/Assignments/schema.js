import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    course: String,          // courseId
    title: String,
    description: String,
    points: Number,
    dueDate: String,
    availableFrom: String,
    availableUntil: String,
  },
  { collection: "assignments" }
);

export default schema;
