"use client";
import { useRouter, useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { courseData } from "@/lib/courses";
import { useSearchParams } from "next/navigation";
import PreQuizModal from "@/components/courses/QuizPrepModal";
import QuizResultsModal from "@/components/courses/QuizResultsModal";
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
  const [isQuizOn, setIsQuizOn] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [totalScore, setTotalScore] = useState(0);
  const [quizOver, setQuizOver] = useState<boolean>(false);
  const router = useRouter();
  const routerParams = useParams();
  const params = useSearchParams();
  const lessonParams = params.get("from");
  const { courseId } = routerParams;
  const course = courseData?.find((c) => c.id === Number(courseId));
  const lesson = course?.lessons.find((l) => l.id === Number(lessonParams));
  const quiz = lesson?.quiz;
  //   const [score, setScore] = useState(0);
  if (!course) return <p>Course not found</p>;
  //   if (!lesson) return <p>Lesson not found</p>;
  const totalPossible = quiz?.reduce((acc, q) => acc + q.score, 0);
  useEffect(() => {
    if (isQuizOn && timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted, isQuizOn]);
  const handleStart = () => {
    setIsQuizOn(true);
  };
  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (!isSubmitted) {
      setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    let score = 0;
    quiz?.forEach((q, id) => {
      if (selectedAnswers[id] === q.answerIndex) {
        score += q.score;
      }
    });
    setTotalScore(score);
  };

  let next = "";
  const handleResults = () => {
    setQuizOver(true);
  };
  const handleNext = () => {
    next =
      totalPossible && (totalScore / totalPossible) * 100 >= 60
        ? `/dashboard/learn/${courseId}/${Number(lessonParams) + 1}`
        : `/dashboard/learn/${courseId}/${Number(lessonParams) - 2}`;
    router.replace(next);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto rounded-xl shadow-md">
      {!isQuizOn && (
        <PreQuizModal
          lessonProgress={Number(lessonParams) * 10}
          onStartQuiz={handleStart}
        />
      )}

      {quizOver && (
        <QuizResultsModal
          percent={totalPossible ? (totalScore / totalPossible) * 100 : 0}
          onContinue={handleNext}
        />
      )}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Quiz</h2>
        <div className="flex items-center">
          <Clock className="mr-2" />
          <span>{timeLeft}s</span>
        </div>
      </div>
      {quiz?.map((q, id) => (
        <div key={id} className="mb-6">
          <p className="font-semibold mb-2">
            {id + 1}. {q.question}
          </p>
          <div className="grid grid-cols-1 gap-2">
            {q.options.map((option, index) => (
              <button
                key={index}
                className={`p-2 rounded ${
                  selectedAnswers[id] === index
                    ? isSubmitted
                      ? index === q.answerIndex
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-blue-500 text-white"
                    : isSubmitted && index === q.answerIndex
                      ? "bg-green-500 text-white"
                      : "bg-blue-900/50"
                }`}
                onClick={() => handleOptionSelect(id, index)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-200">Score: {q.score}</p>
        </div>
      ))}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        onClick={isSubmitted ? handleResults : handleSubmit}
      >
        {isSubmitted ? "Next Lesson" : "Submit"}
        <ArrowRight className="ml-2" />
      </button>
      {isSubmitted && (
        <p className="mt-4 font-bold">
          Total Score: {totalScore}/{totalPossible}
        </p>
      )}
    </div>
  );
};
export default QuizPage;
