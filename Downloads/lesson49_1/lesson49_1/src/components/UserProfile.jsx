import { useEffect, useState } from "react";

export default function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const data = await res.json();
        if (isMounted) setUser(data);
      } catch (e) {
        if (isMounted) setError(e?.message || "Unknown error");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p role="status">Loading...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p><b>Name:</b> <span>{user?.name}</span></p>
      <p><b>Email:</b> <span>{user?.email}</span></p>
    </div>
  );
}
