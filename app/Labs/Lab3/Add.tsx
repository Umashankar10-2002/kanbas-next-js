type AddProps = {
    a: number;
    b: number;
  };
  
  export default function Add({ a, b }: AddProps) {
    return (
      <div id="wd-add-component">
        Add: {a} + {b} = {a + b}
      </div>
    );
  }
  