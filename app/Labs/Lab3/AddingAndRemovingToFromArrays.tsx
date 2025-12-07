import React from "react";

export default function AddingAndRemovingToFromArrays() {
  // Start with base arrays
  const numberArray1: number[] = [1, 2, 3, 4, 5];
  const stringArray1: string[] = ["string1", "string2"];

  const todoArray: React.ReactNode[] = [
    <li key="1">Buy milk</li>,
    <li key="2">Feed the pets</li>,
  ];

  // Add elements
  numberArray1.push(6);
  stringArray1.push("string3");
  todoArray.push(<li key="3">Walk the dogs</li>);

  // Remove elements
  numberArray1.splice(2, 1); // removes index 2
  stringArray1.splice(1, 1); // removes index 1

  return (
    <div id="wd-adding-removing-from-arrays">
      <h4>Adding and Removing to/from Arrays</h4>

      numberArray1 = {numberArray1.join(", ")} <br />
      stringArray1 = {stringArray1.join(", ")} <br />

      Todo list:
      <ol>{todoArray}</ol>

      <hr />
    </div>
  );
}
