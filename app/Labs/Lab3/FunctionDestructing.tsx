export default function FunctionDestructing() {
    const add = (a: number, b: number): number => a + b;
    const sum: number = add(1, 2);
  
    const subtract = ({ a, b }: { a: number; b: number }): number => a - b;
    const difference: number = subtract({ a: 4, b: 2 });
  
    return (
      <div id="wd-function-destructing">
        <h2>Function Destructing</h2>
        const add = (a, b) =&gt; a + b;<br />
        const sum = add(1, 2);<br />
        const subtract = {"{ a, b }"} =&gt; a - b;<br />
        const difference = subtract({"{ a: 4, b: 2 }"});<br />
        sum = {sum}
        <br />
        difference = {difference}
        <hr />
      </div>
    );
  }
  