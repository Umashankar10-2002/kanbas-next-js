"use client";

import Link from "next/link";

export default function PathParameters() {
  const a1 = 1;
  const b1 = 2;
  const a2 = 3;
  const b2 = 4;

  const url1 = `/Labs/Lab3/add/${encodeURIComponent(String(a1))}/${encodeURIComponent(
    String(b1)
  )}`;
  const url2 = `/Labs/Lab3/add/${encodeURIComponent(String(a2))}/${encodeURIComponent(
    String(b2)
  )}`;

  return (
    <div id="wd-path-parameters">
      <h2>Path Parameters</h2>

      <p>Examples of encoding path parameters with encodeURIComponent:</p>
      <p>
        1 + 2: <Link href={url1}>{url1}</Link>
      </p>
      <p>
        3 + 4: <Link href={url2}>{url2}</Link>
      </p>

      <hr />
    </div>
  );
}
