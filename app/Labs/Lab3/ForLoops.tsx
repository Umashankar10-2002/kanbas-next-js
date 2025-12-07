export default function ForLoops() {
    const stringArray1: string[] = ["string1", "string3"];
    const stringArray2: string[] = [];
  
    // Copy and transform elements using a classic for loop
    for (let i = 0; i < stringArray1.length; i += 1) {
      const current = stringArray1[i];
      stringArray2.push(current.toUpperCase());
    }
  
    return (
      <div id="wd-for-loops">
        <h4>For Loops</h4>
        stringArray2 = {stringArray2.join(", ")}
        <hr />
      </div>
    );
  }
  