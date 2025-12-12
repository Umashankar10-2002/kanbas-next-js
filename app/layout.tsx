// app/layout.tsx
import type { ReactNode, CSSProperties } from "react";
import "./Labs/Lab3/Classes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {
  FaUser,
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaInbox,
  FaFlask,
} from "react-icons/fa";

type SidebarLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
};

function SidebarLink({ href, icon, label, active = false }: SidebarLinkProps) {
  const baseStyle: CSSProperties = {
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    fontSize: 12,
    transition: "all 0.2s",
  };

  const activeStyle: CSSProperties = {
    backgroundColor: "#fff",
    color: "#c1121f",
  };

  const inactiveStyle: CSSProperties = {
    backgroundColor: "#000",
    color: "#fff",
  };

  const iconStyle: CSSProperties = {
    color: "#c1121f",
    fontSize: 20,
  };

  return (
    <Link
      href={href}
      style={{
        ...baseStyle,
        ...(active ? activeStyle : inactiveStyle),
      }}
    >
      <div style={iconStyle}>{icon}</div>
      <span>{label}</span>
    </Link>
  );
}

// Data-driven sidebar config
const sidebarLinks: Omit<SidebarLinkProps, "active">[] = [
  { href: "/Kambaz/Account/Signin", icon: <FaUser />, label: "Account" },
  { href: "/Kambaz/Dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { href: "/Kambaz/Courses", icon: <FaBook />, label: "Courses" },
  {
    href: "/Kambaz/Courses/123/Calendar",
    icon: <FaCalendarAlt />,
    label: "Calendar",
  },
  {
    href: "/Kambaz/Courses/123/Inbox",
    icon: <FaInbox />,
    label: "Inbox",
  },
  { href: "/Labs", icon: <FaFlask />, label: "Labs" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "85px 1fr",
            minHeight: "100vh",
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* LEFT SIDEBAR */}
          <nav
            style={{
              backgroundColor: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 16,
              gap: 12,
              borderRight: "1px solid #222",
            }}
          >
            <a
              href="https://www.northeastern.edu"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/logo.png"
                alt="Northeastern"
                style={{ width: 50, height: 50, marginBottom: 10 }}
              />
            </a>

            {/* Sidebar links (no active highlight to keep layout server-safe) */}
            {sidebarLinks.map((link) => (
              <SidebarLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                active={false}
              />
            ))}
          </nav>

          {/* MAIN CONTENT */}
          <main style={{ padding: 24 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
