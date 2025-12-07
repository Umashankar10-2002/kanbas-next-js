import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";

export default function ParameterizedComponents() {
  return (
    <div id="wd-parameterized-components">
      <h2>Parameterized & Child Components</h2>

      <Add a={3} b={4} />
      <Add a={10} b={5} />

      <Square n={5} />
      <Square n={9} />

      <p>
        This is a <Highlight>highlighted message</Highlight> using children.
      </p>

      <hr />
    </div>
  );
}
