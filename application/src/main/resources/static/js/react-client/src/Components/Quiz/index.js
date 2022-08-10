import React, { useState } from 'react';
import Question from './Quiz-Questions';
import Result from './Quiz-Results';
import style from './style.module.scss';

export default function Quiz() {

	// const [currentQuestion, setCurrentQuestion] = useState[0];
	// const [showResult, setShowResult] = useState('');
	// const [score, setScore] = useState(0);

	const QuizQuestions = [

		{
			questionText: 'How long have you been together?',
			answerOptions: [
				{ answerText: 'Answer one', resultID: 1, },
				{ answerText: 'Answer two', resultID: 2, },
				{ answerText: 'Answer three', resultID: 3, },
				{ answerText: 'Answer four', resultID: 4, },
			],
		},
		{
			questionText: 'Describe your personality',
			answerOptions: [
				{ answerText: 'Answer one', resultID: 1, },
				{ answerText: 'Answer two', resultID: 2, },
				{ answerText: 'Answer three', resultID: 3, },
				{ answerText: 'Answer four', resultID: 4, },
			],
		},
		{
			questionText: 'Descibe your partners personality?',
			answerOptions: [
				{ answerText: 'Answer one', resultID: 1, },
				{ answerText: 'Answer two', resultID: 2, },
				{ answerText: 'Answer three', resultID: 3, },
				{ answerText: 'Answer four', resultID: 4, },
			],
		},
		{
			questionText: 'Describe your typical dates?',
			answerOptions: [
				{ answerText: 'Answer one', resultID: 1, },
				{ answerText: 'Answer two', resultID: 2, },
				{ answerText: 'Answer three', resultID: 3, },
				{ answerText: 'Answer four', resultID: 4, },
			],
		},
	];

	return (
		<div>
			<section className={style.quizCont}>
			<div>
				<h2>Customize Your Rekindle Experience</h2>
				<h4>Answer the following questions about your relationship so we can tailor content to your unique preferences.</h4>
			</div>
			<div className={style.quizAns}>
				<h2>Questions 1: How long have you been together?</h2>
				<button className={style.quizBtn}>Answer 1</button>
				<button className={style.quizBtn}>Answer 2</button>
				<button className={style.quizBtn}>Answer 3</button>
				<button className={style.quizBtn}>Answer 4</button>
			</div>
			</section>

			<section className={style.quizCont}>
			<div>
				<h2>Thank You. Your Answers Have Been Recodered</h2>
				<div>Your Customized Dashboard Is Ready</div>
			</div>
			</section>
		</div>
	);
}