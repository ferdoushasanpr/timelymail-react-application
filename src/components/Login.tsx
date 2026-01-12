import type { ChangeEvent, FormEvent } from "react";
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white font-sans">
      {/* Logo */}
      <div className="h-24 w-24 mb-5">
        <img
          src={heroImage}
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </div>

      <h2 className="mb-5 text-xl font-semibold">
        Welcome to TimelyMail!
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[300px] p-5 rounded-lg bg-[#1e1e1e] shadow-lg"
      >
        {!isLogin && (
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="px-3 py-2 rounded border border-[#333] bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-[#333] bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-[#333] bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="py-2 rounded bg-blue-600 hover:bg-blue-700 transition font-bold"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      {/* Toggle */}
      <p className="mt-4 text-sm text-gray-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          onClick={handleToggle}
          className="text-blue-500 cursor-pointer underline hover:text-blue-400"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default Login;
