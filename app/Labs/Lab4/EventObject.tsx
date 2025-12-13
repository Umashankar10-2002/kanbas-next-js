"use client";

import React from "react";

export default function EventObject() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    alert(`You clicked button with id: ${(event.target as HTMLButtonElement).id}`);
  };

  return (
    <div id="wd-event-object">
      <h2>The Event Object</h2>
      <button id="wd-event-object-click" onClick={handleClick}>
        Click to inspect event
      </button>
      <hr />
    </div>
  );
}
