"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import * as client from "../../client";

export default function PeopleDetails() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const u = await client.findUserById(id);
      setUser(u);
    })();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h3>PeopleDetails</h3>
      <div><b>Username:</b> {user.username}</div>
      <div><b>Name:</b> {user.firstName} {user.lastName}</div>
      <div><b>Role:</b> {user.role}</div>
    </div>
  );
}
