type SquareProps = {
    n: number;
  };
  
  export default function Square({ n }: SquareProps) {
    return (
      <div id="wd-square-component">
        Square: {n} * {n} = {n * n}
      </div>
    );
  }
  