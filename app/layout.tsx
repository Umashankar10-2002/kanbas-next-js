// app/layout.tsx
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

export default function RootLayout({ children }) {
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
            {/* Northeastern Logo */}
            <a
              href="https://www.northeastern.edu"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/logo.png"
                alt="Northeastern"
                style={{
                  width: 50,
                  height: 50,
                  marginBottom: 10,
                }}
              />
            </a>

            {/* Sidebar links */}
            <SidebarLink href="/Kambaz/Account/Signin" icon={<FaUser />} label="Account" />
            <SidebarLink
              href="/Kambaz/Dashboard"
              icon={<FaTachometerAlt />}
              label="Dashboard"
              active
            />
            <SidebarLink href="/Kambaz/Courses" icon={<FaBook />} label="Courses" />
            <SidebarLink
              href="/Kambaz/Courses/123/Calendar"
              icon={<FaCalendarAlt />}
              label="Calendar"
            />
            <SidebarLink
              href="/Kambaz/Courses/123/Inbox"
              icon={<FaInbox />}
              label="Inbox"
            />
            <SidebarLink href="/Labs" icon={<FaFlask />} label="Labs" />
          </nav>

          {/* MAIN CONTENT */}
          <main style={{ padding: 24 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}

/* SidebarLink component */
function SidebarLink({ href, icon, label, active }) {
  const baseStyle = {
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

  const activeStyle = {
    backgroundColor: "#fff",
    color: "#c1121f",
  };

  const inactiveStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };

  const iconStyle = active
    ? { color: "#c1121f", fontSize: 20 }
    : { color: "#c1121f", fontSize: 20 };

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
