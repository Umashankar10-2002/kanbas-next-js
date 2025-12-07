import React from "react";

type HighlightProps = {
  children: React.ReactNode;
};

export default function Highlight({ children }: HighlightProps) {
  return (
    <span
      id="wd-highlight-component"
      style={{ backgroundColor: "yellow", padding: "4px" }}
    >
      {children}
    </span>
  );
}
