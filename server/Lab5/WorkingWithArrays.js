// server/Lab5/WorkingWithArrays.js
let todos = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: true },
  ];
  
  export default function WorkingWithArrays(app) {
    // Get all todos OR filter by completed
    app.get("/lab5/todos", (req, res) => {
      const { completed } = req.query;
      if (completed !== undefined) {
        const completedBool = completed === "true";
        const completedTodos = todos.filter(
          (t) => t.completed === completedBool
        );
        res.json(completedTodos);
        return;
      }
      res.json(todos);
    });
  
    // ✅ CREATE via GET (used in labs & async create)
    app.get("/lab5/todos/create", (req, res) => {
      const newTodo = {
        id: new Date().getTime(),
        title: "New Task",
        completed: false,
      };
      todos.push(newTodo);
      res.json(todos);
    });
  
    // Get todo by id
    app.get("/lab5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      res.json(todo);
    });
  
    // Delete todo by id via GET (old style)
    app.get("/lab5/todos/:id/delete", (req, res) => {
      const { id } = req.params;
      const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
      if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
      }
      res.json(todos);
    });
  
    // Update todo title via GET
    app.get("/lab5/todos/:id/title/:title", (req, res) => {
      const { id, title } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      if (todo) {
        todo.title = title;
      }
      res.json(todos);
    });
  
    // ✅ HTTP POST – create from body
    app.post("/lab5/todos", (req, res) => {
      const newTodo = { ...req.body, id: new Date().getTime() };
      todos.push(newTodo);
      res.json(newTodo);
    });
  
    // ✅ HTTP DELETE – remove by id, with error if not found
    app.delete("/lab5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
  
      if (todoIndex === -1) {
        return res
          .status(400)
          .json({ message: `Unable to Delete Todo with ID: ${id}` });
      }
  
      todos.splice(todoIndex, 1);
      res.sendStatus(200);
    });
  
    // ✅ HTTP PUT – update fields from body
    app.put("/lab5/todos/:id", (req, res) => {
      const { id } = req.params;
      todos = todos.map((t) => {
        if (t.id === parseInt(id)) {
          return { ...t, ...req.body };
        }
        return t;
      });
      res.sendStatus(200);
    });
  }
  