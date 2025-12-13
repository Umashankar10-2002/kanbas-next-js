type House = {
    rooms: number;
    baths: number;
    sqf: number;
  };
  
  export default function JsonHouse() {
    const house: House = {
      rooms: 3,
      baths: 3,
      sqf: 1300,
    };
  
    const json: string = JSON.stringify(house);
  
    return (
      <div id="wd-json">
        <h4>JavaScript Object Notation (JSON)</h4>
        json = {json} <br />
        rooms = {house.rooms} <br />
        baths = {house.baths} <br />
        sqf = {house.sqf}
        <hr />
      </div>
    );
  }
  