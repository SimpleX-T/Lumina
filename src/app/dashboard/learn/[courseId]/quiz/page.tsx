"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { courseData } from "@/lib/courses";
import { useSearchParams } from "next/navigation";
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  score: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "What is your gender?",
    options: ["Male", "Female", "Other"],
    correctAnswer: 2,
    score: 10,
  },
  {
    id: 2,
    text: "What is your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: 1,
    score: 15,
  },
  {
    id: 3,
    text: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    score: 20,
  },
];

const QuizPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [totalScore, setTotalScore] = useState(0);
  const routerParams = useParams();
  const params = useSearchParams();
  const { courseId } = routerParams;
  const course = courseData.find((c) => c.id === Number(courseId));
  const lesson = course?.lessons.find((l) => l.id === Number(params));
  //   const quiz = lesson?.quiz;
  //   const [score, setScore] = useState(0);
  //   if (!course) return <p>Course not found</p>;
  //   if (!lesson) return <p>Lesson not found</p>;
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (!isSubmitted) {
      setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    let score = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        score += question.score;
      }
    });
    setTotalScore(score);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white/50 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Quiz</h2>
        <div className="flex items-center">
          <Clock className="mr-2" />
          <span>{timeLeft}s</span>
        </div>
      </div>
      {questions.map((question) => (
        <div key={question.id} className="mb-6">
          <p className="font-semibold mb-2">{question.text}</p>
          <div className="grid grid-cols-1 gap-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`p-2 rounded ${
                  selectedAnswers[question.id] === index
                    ? isSubmitted
                      ? index === question.correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-blue-500 text-white"
                    : isSubmitted && index === question.correctAnswer
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                }`}
                onClick={() => handleOptionSelect(question.id, index)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-600">Score: {question.score}</p>
        </div>
      ))}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        onClick={handleSubmit}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Next Lesson" : "Submit"}
        <ArrowRight className="ml-2" />
      </button>
      {isSubmitted && (
        <p className="mt-4 font-bold">
          Total Score: {totalScore}/
          {questions.reduce((acc, q) => acc + q.score, 0)}
        </p>
      )}
    </div>
  );
};
export default QuizPage;
