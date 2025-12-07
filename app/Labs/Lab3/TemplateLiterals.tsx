export default function TemplateLiterals() {
    const first: string = "Web";
    const second: string = "Dev";
    const sum: number = 2 + 3;
  
    const message: string = `${first} ${second} is awesome!`;
    const equation: string = `2 + 3 = ${sum}`;
  
    return (
      <div id="wd-template-literals">
        <h4>Template Literals</h4>
        message = {message} <br />
        equation = {equation}
        <hr />
      </div>
    );
  }
  