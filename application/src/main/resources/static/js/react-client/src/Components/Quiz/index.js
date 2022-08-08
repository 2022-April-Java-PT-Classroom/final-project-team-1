import React, { useState } from 'react';
import style from './style.module.scss';

export default function Quiz() {

	const questions = [
		{
			questionText: 'How long have you been together?',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: false },
			],
		},
		{
			questionText: 'Describe your personality',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
			],
		},
		{
			questionText: 'Descibe your partners personality?',
			answerOptions: [
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
			],
		},
		{
			questionText: 'Describe your typical dates?',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: true },
			],
		},
	];

	return (
		<div>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>This is where the question text should go</div>
					</div>
					<div className='answer-section'>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button>
					</div>
				</>
			)}
		</div>
	);
}