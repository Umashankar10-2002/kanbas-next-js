export default function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
  
    const numbers: string[] = ["one", "two", "three"];
    const [first, second, third] = numbers;
  
    return (
      <div id="wd-destructing">
        <h2>Destructing</h2>
  
        <h3>Object Destructing</h3>
        const {"{ name, age }"} = {"{ name: \"John\", age: 25 }"} <br />
        <br />
        name = {name}
        <br />
        age = {age}
        <br />
  
        <h3>Array Destructing</h3>
        const [first, second, third] = ["one","two","three"] <br />
        <br />
        first = {first}
        <br />
        second = {second}
        <br />
        third = {third}
        <hr />
      </div>
    );
  }
  