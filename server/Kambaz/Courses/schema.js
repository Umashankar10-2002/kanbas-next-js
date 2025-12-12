import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    code: String,
    term: String,
    color: String,
    image: String,
  },
  { collection: "courses" }
);

export default schema;
