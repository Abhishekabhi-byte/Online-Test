"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Trophy } from "lucide-react";

function ResultContent() {
  const searchParams = useSearchParams();

  const score = searchParams.get("score");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center shadow-2xl max-w-md w-full">

        <div className="flex justify-center mb-6">
          <div className="bg-yellow-400 p-5 rounded-full">
            <Trophy className="text-black w-12 h-12" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Congratulations
        </h1>

        <p className="text-gray-300 mb-8">
          Your test has been submitted successfully
        </p>

        <div className="bg-white text-black rounded-2xl py-6 mb-6">
          <h2 className="text-xl font-semibold">
            Your Score
          </h2>

          <p className="text-6xl font-bold mt-2">
            {score}
          </p>
        </div>

      </div>

    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}