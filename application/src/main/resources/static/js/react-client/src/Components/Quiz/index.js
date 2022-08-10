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

	// Functions
	const indexClicked = () => {
		if ((currentQuestion + 1) < Question.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResult(true);
		}
		console.log(Question.length);
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
					{Question[currentQuestion].answerOptions.map((index) => {
						return (
							<button key={index.resultID} onClick={() => indexClicked()} className={style.quizBtn}>{index.answerText}</button>
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