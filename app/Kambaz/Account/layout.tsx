import type { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container mt-3">
      <AccountNavigation />
      {children}
    </div>
  );
}
