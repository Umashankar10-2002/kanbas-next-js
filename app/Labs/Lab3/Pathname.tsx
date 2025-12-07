"use client";

import { usePathname } from "next/navigation";

export default function Pathname() {
  const pathname = usePathname();

  return (
    <div id="wd-pathname">
      <h2>Pathname</h2>
      <p>Current pathname: {pathname}</p>
      <hr />
    </div>
  );
}
