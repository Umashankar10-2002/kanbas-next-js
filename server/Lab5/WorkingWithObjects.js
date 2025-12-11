// server/Lab5/WorkingWithObjects.js
const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  export default function WorkingWithObjects(app) {
    // Get whole assignment object
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    // Get only the title
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
  
    // Update the title using a path parameter
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
  }
  