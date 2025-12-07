"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

const items: NavItem[] = [
  { href: "/Labs/Lab3", label: "Lab 3 Home" },
  { href: "/Labs/Lab3/add/1/2", label: "1 + 2" },
  { href: "/Labs/Lab3/add/3/4", label: "3 + 4" },
];

export default function TOC() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div id="wd-navigation">
      <h2>Navigation</h2>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={isActive(item.href) ? { fontWeight: "bold", textDecoration: "underline" } : {}}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
