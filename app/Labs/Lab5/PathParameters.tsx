"use client";

import { useState } from "react";

const REMOTE_SERVER = "http://localhost:4000"; // hard-coded for now

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-path-parameters" className="mb-4">
      <h3>Path Parameters</h3>

      <input
        className="form-control mb-2"
        type="number"
        defaultValue={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="form-control mb-2"
        type="number"
        defaultValue={b}
        onChange={(e) => setB(e.target.value)}
      />

      {/* THESE MUST GO DIRECTLY TO PORT 4000, NOT /Labs/... */}

      <a
        className="btn btn-primary me-2 mb-2"
        href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}
        id="wd-path-add"
      >
        Add {a} + {b}
      </a>

      <a
        className="btn btn-danger me-2 mb-2"
        href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}
        id="wd-path-subtract"
      >
        Subtract {a} - {b}
      </a>

      <a
        className="btn btn-success me-2 mb-2"
        href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}
        id="wd-path-multiply"
      >
        Multiply {a} × {b}
      </a>

      <a
        className="btn btn-warning mb-2"
        href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}
        id="wd-path-divide"
      >
        Divide {a} ÷ {b}
      </a>

      <hr />
    </div>
  );
}
