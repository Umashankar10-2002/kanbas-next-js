export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let booleanVariable = true;
    return (
      <div id="wd-variable-types">
        <h4>Variables Types</h4>
        numberVariable = {numberVariable}<br/>
        floatingPointNumber = {floatingPointNumber}<br/>
        stringVariable = {stringVariable}<br/>
        booleanVariable = {String(booleanVariable)}<hr/>
      </div>
    );
  }
  