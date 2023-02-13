import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'How to print "Hello World" using pyhton?',
			answerOptions: [
				{ answerText: 'printf("Hello World");', isCorrect: false },
				{ answerText: 'print("Hello World")', isCorrect: true },
				{ answerText: 'printt("Hello World")', isCorrect: false },
				{ answerText: 'print(Hello World);', isCorrect: false },
			],
		},
		{
			questionText: 'What is the syntax to create Directory',
			answerOptions: [
				{ answerText: 'D={}', isCorrect: true },
				{ answerText: 'D=[]', isCorrect: false },
				{ answerText: 'D=()', isCorrect: false },
				{ answerText: 'D=dictionary()', isCorrect: false },
			],
		},
		{
			questionText: 'Values of CSV files are seperated by?',
			answerOptions: [
				{ answerText: 'Commas', isCorrect: true },
				{ answerText: 'Colons', isCorrect: false },
				{ answerText: 'Semi-colons', isCorrect: false },
				{ answerText: 'Slash', isCorrect: false },
			],
		},
		{
			questionText: 'Library used to import images?',
			answerOptions: [
				{ answerText: 'PIL', isCorrect: true },
				{ answerText: 'ImageView', isCorrect: false },
				{ answerText: 'image', isCorrect: false },
				{ answerText: 'IMG', isCorrect: false },
			],
		},
		{
			questionText: 'How can you convert a list L to tuple?',
			answerOptions: [
				{ answerText: 'tup(L)', isCorrect: false },
				{ answerText: 'L(tuple)', isCorrect: false },
				{ answerText: 'L(tup)', isCorrect: false },
				{ answerText: 'tuple(L)', isCorrect: true },
			],
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				// <h1 className='score-section'>FINAL SCORE</h1>
				<div className='score-section'>
					FINAL SCORE : {score} / {questions.length}
				</div>
		
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span> Q NO {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
