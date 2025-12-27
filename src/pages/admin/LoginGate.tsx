import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "TauroDreamProject2025PS+"; // Moje heslo aktuální!

export default function LoginGate({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("adminLoggedIn");
    if (saved === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Špatné heslo");
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Admin přihlášení</h2>
        <input
          type="password"
          placeholder="Zadej heslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginTop: "20px" }}
        />
        <br />
        <button
          onClick={handleLogin}
          style={{ marginTop: "20px", padding: "10px 20px" }}
        >
          Přihlásit
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
