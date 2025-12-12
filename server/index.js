// server/index.js
import express from "express";
import cors from "cors";
import session from "express-session";
import Lab5 from "./Lab5/index.js";
import db from "./Kambaz/db.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";  
import ModulesRoutes from "./Kambaz/Modules/routes.js"; 
import AssignmentsRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";



const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "kambaz-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Lab5 routes
Lab5(app);

// Kambaz Users routes
UserRoutes(app, db);

// Kambaz Courses routes 
CourseRoutes(app, db);

// Kambaz Modules routes
ModulesRoutes(app, db);

AssignmentsRoutes(app, db);

EnrollmentRoutes(app, db);

app.get("/hello", (req, res) => {
  res.send("Hello from Kambaz server");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
