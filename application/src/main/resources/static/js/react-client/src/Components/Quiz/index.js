import React, { useState } from 'react';
import Question from './Quiz-Questions';
import Result from './Quiz-Results';
import style from './style.module.scss';

function Quiz({ quizShown }) {

	// Variables
	const [showResult, setShowResult] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [scoreOne, setScoreOne] = useState(0);
	const [scoreTwo, setScoreTwo] = useState(0);
	const [scoreThree, setScoreThree] = useState(0);
	const [scoreFour, setScoreFour] = useState(0);



	// Array
	const QuizQuestions = [

		{
			questionText: 'How long have you and your partner been together?',
			answerOptions: [
				{ answerText: 'Less than 1 year', resultID: 1, pointvalue: 1, },
				{ answerText: 'Between 1-2 years', resultID: 2, pointvalue: 1, },
				{ answerText: 'Between 2-4 years', resultID: 3, pointvalue: 1, },
				{ answerText: 'Over 4+ years', resultID: 4, pointvalue: 1, },
			],
		},
		{
			questionText: 'Describe your personality?',
			answerOptions: [
				{ answerText: '1 Answer cool', resultID: 1, pointvalue: 3, },
				{ answerText: '1 Answer two', resultID: 2, pointvalue: 3, },
				{ answerText: '1 Answer three', resultID: 3, pointvalue: 3, },
				{ answerText: '1 Answer four', resultID: 4, pointvalue: 3, },
			],
		},
		{
			questionText: 'Describe your personality',
			answerOptions: [
				{ answerText: '2 Answer cool', resultID: 1, pointvalue: 2, },
				{ answerText: '2 Answer two', resultID: 2, pointvalue: 2, },
				{ answerText: '2 Answer three', resultID: 3, pointvalue: 2, },
				{ answerText: '2 Answer four', resultID: 4, pointvalue: 2, },
			],
		},
		{
			questionText: 'Descibe your partners personality?',
			answerOptions: [
				{ answerText: '3 Answer cool', resultID: 1, pointvalue: 1, },
				{ answerText: '3 Answer two', resultID: 2, pointvalue: 1, },
				{ answerText: '3 Answer three', resultID: 3, pointvalue: 1, },
				{ answerText: '3 Answer four', resultID: 4, pointvalue: 1, },
			],
		},
		{
			questionText: 'Describe your typical dates?',
			answerOptions: [
				{ answerText: '4 Answer cool', resultID: 1, pointvalue: 4, },
				{ answerText: '4 Answer two', resultID: 2, pointvalue: 4, },
				{ answerText: '4 Answer three', resultID: 3, pointvalue: 4, },
				{ answerText: '4 Answer four', resultID: 4, pointvalue: 4, },
			],
		},
	];

	// Functions
	const indexClicked = (resultID, pointvalue) => {
		// if(resultID == 1) {
		// 	setScoreOne(scoreOne + pointvalue);
		// }
		// if(resultID == 2) {
		// 	setScoreTwo(scoreTwo + pointvalue);
		// }
		// if(resultID == 3) {
		// 	setScoreThree(scoreThree + pointvalue);
		// }
		// if(resultID == 4) {
		// 	setScoreFour(scoreFour + pointvalue);
		// }
		console.log(pointvalue)
	}

	return (
		<div className={style.quizBG}>
			{ showResult ?
			<section className={style.quizCont}>
			<div className={style.quizClose}>
				<button className={style.quizCloseBtn} onClick={() => quizShown(false)}>X</button>
			</div>
			<div className={style.quizResult}>
				<h2 className={style.quizH2}>Thank You. Your Answers Have Been Recodered.</h2>
				<h4 className={style.quizH4}>Your Dashboard With Customized Content Is Ready</h4>
			</div>
			</section>
			:
			<section className={style.quizCont}>
			<div className={style.quizClose}>
				<button className={style.quizCloseBtn} onClick={() => quizShown(false)}>X</button>
			</div>
			<div>
				<h2 className={style.quizH2}>Customize Your Experience</h2>
				<h4 className={style.quizH4}>Answer the following questions about your relationship so we can tailor content to your unique preferences.</h4>
			</div>
			<div className={style.quizAns}>
				<h4 className={style.quizH4}>Questions {currentQuestion + 1} : {Question[currentQuestion].questionText}</h4>
				<ul>
					{QuizQuestions[currentQuestion].answerOptions.map((index) => {
						return (
							<button key={index.resultID} onClick={() => indexClicked(index.resultID)} className={style.quizBtn}>{index.answerText}</button>
						);
					})}
				</ul>
			</div>
			</section>
		}
		</div>
	);
}

export default Quiz;