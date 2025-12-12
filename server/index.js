// server/index.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";

import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModulesRoutes from "./Kambaz/Modules/routes.js";
import AssignmentsRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";

const app = express();
app.use(express.json());

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz";
mongoose.connect(CONNECTION_STRING);

const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:3000";

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

const isProd = process.env.NODE_ENV === "production";

app.set("trust proxy", 1); 

app.use(
  session({
    secret: process.env.SESSION_SECRET || "kambaz-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProd,                 // true on Render (https)
      sameSite: isProd ? "none" : "lax",
    },
  })
);

// Lab5 routes
Lab5(app);

// ✅ Routes (DO NOT pass db anymore once you switch DAOs to mongoose)
UserRoutes(app);
CourseRoutes(app);
ModulesRoutes(app);
AssignmentsRoutes(app);
EnrollmentRoutes(app);

app.get("/hello", (req, res) => {
  res.send("Hello from Kambaz server");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
