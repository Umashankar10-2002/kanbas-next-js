"use client";

import { useState } from "react";

const REMOTE_SERVER = "http://localhost:4000"; // hard-coded for now

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-query-parameters" className="mb-4">
      <h3>Query Parameters</h3>

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

      <a
        className="btn btn-primary me-2 mb-2"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
        id="wd-query-add"
      >
        Add {a} + {b}
      </a>

      <a
        className="btn btn-danger me-2 mb-2"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
        id="wd-query-subtract"
      >
        Subtract {a} - {b}
      </a>

      <a
        className="btn btn-success me-2 mb-2"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
        id="wd-query-multiply"
      >
        Multiply {a} × {b}
      </a>

      <a
        className="btn btn-warning mb-2"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
        id="wd-query-divide"
      >
        Divide {a} ÷ {b}
      </a>

      <hr />
    </div>
  );
}
