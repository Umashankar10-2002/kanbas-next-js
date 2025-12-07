export default function ImpliedReturn() {
    // Single-line arrow with implied return
    const multiply = (a: number, b: number): number => a * b;
  
    return (
      <div id="wd-implied-return">
        <h4>Implied Return</h4>
        multiply(3, 6) = {multiply(3, 6)}
        <hr />
      </div>
    );
  }
  