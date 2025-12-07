export default function FindIndexFunction() {
    const numberArray1: number[] = [1, 3, 4, 2, 5];
  
    const firstGreaterThan3Index: number = numberArray1.findIndex(
      (x) => x > 3
    );
  
    return (
      <div id="wd-find-index-function">
        <h4>Find Index Function</h4>
        index of first value &gt; 3 = {firstGreaterThan3Index}
        <hr />
      </div>
    );
  }
  