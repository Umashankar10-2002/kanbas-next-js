"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function AccountNavigation() {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const u = await client.profile();
        setUser(u);
      } catch (e) {
        setUser(null);
      } finally {
        setLoaded(true);
      }
    };
    load();
  }, []);

  if (!loaded) return null;
  if (!user) return null;

  return (
    <Nav variant="tabs" className="mb-3">
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Kambaz/Account/Profile"
          active={pathname.includes("/Kambaz/Account/Profile")}
        >
          Profile
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Kambaz/Account/Users"
          active={pathname.includes("/Kambaz/Account/Users")}
        >
          Users
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
