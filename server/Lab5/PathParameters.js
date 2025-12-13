// server/Lab5/PathParameters.js

export default function PathParameters(app) {
    // 34 + 23 (path)
    app.get("/lab5/add/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) + parseInt(b);
      res.send(sum.toString());
    });
  
    // 34 - 23 (path)
    app.get("/lab5/subtract/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const diff = parseInt(a) - parseInt(b);
      res.send(diff.toString());
    });
  
    // multiply (path)
    app.get("/lab5/multiply/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const product = parseInt(a) * parseInt(b);
      res.send(product.toString());
    });
  
    // divide (path)
    app.get("/lab5/divide/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const divisor = parseInt(b);
      if (divisor === 0) {
        return res.status(400).send("Division by zero");
      }
      const quotient = parseInt(a) / divisor;
      res.send(quotient.toString());
    });
  }
  