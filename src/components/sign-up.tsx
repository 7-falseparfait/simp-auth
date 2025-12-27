"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const signUp = async () => {
    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10 border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold text-gray-900">Create Account</h1>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@example.com"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
        />
      </div>

      <button
        onClick={signUp}
        disabled={isLoading}
        className={`mt-2 p-2 rounded text-white font-medium transition-colors ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:bg-gray-800"
        }`}
      >
        {isLoading ? "Creating Account..." : "Sign Up"}
      </button>
    </div>
  );
}
