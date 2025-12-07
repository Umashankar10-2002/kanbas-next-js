export default function ArrowFunctions() {
    // ES6 arrow function with types
    const add = (a: number, b: number): number => a + b;
  
    return (
      <div id="wd-es6-arrow">
        <h4>ES6 Arrow Function</h4>
        add(4, 5) = {add(4, 5)}
        <hr />
      </div>
    );
  }
  