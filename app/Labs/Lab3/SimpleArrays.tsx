import React from "react";

export default function SimpleArrays() {
  const functionScoped: number = 2;
  const blockScoped: number = 5;
  const constant1: number = functionScoped - blockScoped;

  const numberArray1: number[] = [1, 2, 3, 4, 5];
  const stringArray1: string[] = ["string1", "string2"];

  // IMPORTANT: Use React.ReactNode[] instead of JSX.Element[]
  const htmlArray1: React.ReactNode[] = [
    <li key="1">Buy milk</li>,
    <li key="2">Feed the pets</li>,
  ];

  const variableArray1: (number | number[] | string[])[] = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  return (
    <div id="wd-simple-arrays">
      <h4>Simple Arrays</h4>

      numberArray1 = {numberArray1.join(", ")} <br />
      stringArray1 = {stringArray1.join(", ")} <br />
      variableArray1 = {variableArray1.join(" | ")} <br />

      Todo List:
      <ol>{htmlArray1}</ol>

      <hr />
    </div>
  );
}
