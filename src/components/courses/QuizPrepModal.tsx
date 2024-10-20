import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/UI/alert";

const PreQuizModal = ({
  lessonProgress,
  onStartQuiz,
}: {
  lessonProgress: number;
  onStartQuiz: Function;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full text-stone-900">
        <h2 className="text-2xl font-bold mb-4">Quiz Time!</h2>
        <p className="mb-4">
          You've completed {lessonProgress}% of the lesson. It's time for a quiz
          to test what you've learned!
        </p>

        <Alert className="mb-4">
          <AlertTitle>Quiz Rules</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside">
              <li>There's a 30-second timer for the quiz.</li>
              <li>
                Unanswered questions will be marked incorrect when the timer
                ends.
              </li>
              <li>You need to score at least 60% to progress.</li>
            </ul>
          </AlertDescription>
        </Alert>

        <button
          onClick={() => {
            onStartQuiz();
          }}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default PreQuizModal;