import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/UI/alert";
import ReuseableModal from "../UI/ReuseableModal";

const PreQuizModal = ({
	lessonProgress,
	onStartQuiz,
}: {
	lessonProgress: number;
	onStartQuiz: Function;
}) => {
	return (
		<ReuseableModal
			type='info'
			isOpen={true}
			onClose={() => {}}
			title='Quiz Time!'
			content={
				<div className='bg-white rounded-lg transform md:translate-x-[30%] p-6 max-w-md w-full text-stone-900'>
					<h2 className='text-2xl font-bold mb-4'>Quiz Time!</h2>
					<p className='mb-4'>
						You've completed {lessonProgress}% of the lesson. It's
						time for a quiz to test what you've learned!
					</p>

					<Alert className='mb-4'>
						<AlertTitle>Quiz Rules</AlertTitle>
						<AlertDescription>
							<ul className='list-disc list-inside'>
								<li>
									There's a{" "}
									<span className='uppercase font-bold'>
										60-second timer
									</span>{" "}
									for the quiz. Approx. 5-seconds per
									question, <b>USE IT WISELY </b>
									😁
								</li>
								<li>
									Unanswered questions will be marked
									incorrect when the timer ends.
								</li>
								<li>
									You need to score at least 60% to progress.
								</li>
							</ul>
						</AlertDescription>
					</Alert>

					<button
						onClick={() => {
							onStartQuiz();
						}}
						className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'>
						Start Quiz
					</button>
				</div>
			}></ReuseableModal>
	);
};

export default PreQuizModal;
