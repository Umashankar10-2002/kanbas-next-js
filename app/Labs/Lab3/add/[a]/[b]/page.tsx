type RouteParams = {
    a: string;
    b: string;
  };
  
  type AddPageProps = {
    // In your Next.js version, params is a Promise
    params: Promise<RouteParams>;
  };
  
  export default async function AddPage({ params }: AddPageProps) {
    // Await the params Promise
    const { a, b } = await params;
  
    const aNum = Number(a);
    const bNum = Number(b);
    const sum = aNum + bNum;
  
    // Always render a string so React never sees NaN as a raw value
    const sumText = Number.isNaN(sum) ? "NaN" : String(sum);
  
    return (
      <div>
        <h2>Add</h2>
        <p>
          {a} + {b} ={" "}
          <span id={`wd-sum-${a}-${b}`}>{sumText}</span>
        </p>
        <hr />
      </div>
    );
  }
  