export default function FindFunction() {
    const numberArray1: number[] = [1, 2, 3, 4, 5];
    const stringArray1: string[] = ["string1", "string2", "string3"];
  
    const four: number | undefined = numberArray1.find((a) => a === 4);
    const string3: string | undefined = stringArray1.find(
      (a) => a === "string3"
    );
  
    return (
      <div id="wd-find-function">
        <h4>Find Function</h4>
        four = {four} <br />
        string3 = {string3}
        <hr />
      </div>
    );
  }
  