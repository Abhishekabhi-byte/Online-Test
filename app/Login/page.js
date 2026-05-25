"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

const students = [
  {
    id: "student1",
    password: "1234",
  },

  {
    id: "student2",
    password: "5678",
  },

  {
    id: "abhishek",
    password: "9999",
  },
];

const handleLogin = () => {

  const validStudent = students.find(
    (student) =>
      student.id === studentId &&
      student.password === password
  );

  if (validStudent) {
    router.push("/Test");
  } else {
    alert("Invalid Student ID or Password");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Login to start your online test
        </p>

        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) =>
            setStudentId(e.target.value)
          }
          className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-white text-black font-semibold p-4 rounded-xl hover:scale-105 transition duration-300"
        >
          Login
        </button>

      </div>

    </div>
  );
}