import type { CSSProperties, ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import heroImage from "../assets/hero.png";

function Login() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleToggle = (): void => setIsLogin(!isLogin);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Signing up...", formData);
  };

  const containerStyle: CSSProperties = {
    backgroundColor: "#121212",
    color: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#1e1e1e",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
  };

  const inputStyle: CSSProperties = {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #333",
    backgroundColor: "#2c2c2c",
    color: "white",
  };

  const buttonStyle: CSSProperties = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={{ height: "100px", width: "100px", marginBottom: "20px" }}>
        <img
          src={heroImage}
          alt="Logo"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </div>

      <h2 style={{ marginBottom: "20px" }}>Welcome to TimelyMail!</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        {!isLogin && (
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            style={inputStyle}
            onChange={handleChange}
            required
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          style={inputStyle}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          style={inputStyle}
          onChange={handleChange}
          required
        />
        <button type="submit" style={buttonStyle}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p style={{ marginTop: "15px", fontSize: "0.9rem", color: "#bbb" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          onClick={handleToggle}
          style={{
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default Login;