export default function LegacyFunctions() {
    // Classic ES5-style function, but with TypeScript types
    function add(a: number, b: number): number {
      return a + b;
    }
  
    return (
      <div id="wd-legacy-es5">
        <h4>Legacy ES5 Function</h4>
        add(2, 3) = {add(2, 3)}
        <hr />
      </div>
    );
  }
  