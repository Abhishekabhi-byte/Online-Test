"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();

const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Machine Language",
    ],
    answer: "Hyper Text Markup Language",
  },

  {
    id: 2,
    question: "Which language is used for styling websites?",
    options: [
      "Python",
      "CSS",
      "MongoDB",
      "Java",
    ],
    answer: "CSS",
  },

  {
    id: 3,
    question: "Which language is mainly used for web interactivity?",
    options: [
      "JavaScript",
      "C++",
      "SQL",
      "PHP",
    ],
    answer: "JavaScript",
  },

  {
    id: 4,
    question: "Which company developed JavaScript?",
    options: [
      "Microsoft",
      "Netscape",
      "Google",
      "Apple",
    ],
    answer: "Netscape",
  },

  {
    id: 5,
    question: "Which tag is used for a paragraph in HTML?",
    options: [
      "<div>",
      "<p>",
      "<h1>",
      "<span>",
    ],
    answer: "<p>",
  },

  {
    id: 6,
    question: "Which CSS property changes text color?",
    options: [
      "font-size",
      "background",
      "color",
      "border",
    ],
    answer: "color",
  },

  {
    id: 7,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Internet",
      "Application Process Integration",
      "Automatic Programming Interface",
    ],
    answer: "Application Programming Interface",
  },

  {
    id: 8,
    question: "Which hook is used for state in React?",
    options: [
      "useFetch",
      "useRouter",
      "useState",
      "usePage",
    ],
    answer: "useState",
  },

  {
    id: 9,
    question: "Which database is commonly used with MERN stack?",
    options: [
      "MongoDB",
      "Oracle",
      "MySQL",
      "Firebase",
    ],
    answer: "MongoDB",
  },

  {
    id: 10,
    question: "Which command starts a Next.js project?",
    options: [
      "npm run dev",
      "npm start next",
      "next run",
      "npm build",
    ],
    answer: "npm run dev",
  },
];

  const [answers, setAnswers] = useState({});

  const handleOptionChange = (
    questionId,
    option
  ) => {
    setAnswers({
      ...answers,
      [questionId]: option,
    });
  };

const handleSubmit = () => {

  if (
    Object.keys(answers).length !== questions.length
  ) {
    alert("Please answer all questions");
    return;
  }

  let score = 0;

  questions.forEach((q) => {
    if (answers[q.id] === q.answer) {
      score++;
    }
  });

  router.push(`/Result?score=${score}`);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-5xl text-black font-bold mb-3">
            Online Examination
          </h1>

          <p className="text-gray-600">
            Complete all questions carefully
          </p>
        </div>

        {questions.map((q, index) => (
          <div
            key={q.id}
            className="bg-black rounded-3xl p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl  font-bold mb-6">
              Q{index + 1}. {q.question}
            </h2>

            <div className="space-y-4">
              {q.options.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-4 border p-4 rounded-2xl cursor-pointer text-red-500 hover:bg-gray-100 transition`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={option}
                    onChange={() =>
                      handleOptionChange(
                        q.id,
                        option
                      )
                    }
                    className="w-5 h-5"
                  />

                  <span className="text-lg">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-5 cursor-pointer rounded-2xl text-xl font-semibold hover:scale-[1.02] transition duration-300"
        >
          Submit Test
        </button>

      </div>

    </div>
  );
}