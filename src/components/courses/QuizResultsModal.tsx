import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/UI/alert";

const QuizResultsModal = ({
  percent,
  onContinue,
}: {
  percent: number;
  onContinue: Function;
}) => {
  const passed = percent >= 60;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full  text-stone-800">
        <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>

        <Alert className={`mb-4 ${passed ? "bg-green-100" : "bg-red-100"}`}>
          <AlertTitle>
            {passed ? "Congratulations!" : "Not quite there yet."}
          </AlertTitle>
          <AlertDescription>
            You scored {Math.round(percent)}% on the quiz.
            {passed
              ? " You've passed and can move on to the next lesson!"
              : " Seems you didnt understand the previous lessons, you'll have to redo them to progress"}
          </AlertDescription>
        </Alert>

        <button
          onClick={() => {
            onContinue();
          }}
          className={`w-full py-2 px-4 rounded transition-colors ${
            passed
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          {passed ? "Continue to Next Lesson" : "Redo Lessons"}
        </button>
      </div>
    </div>
  );
};

export default QuizResultsModal;
