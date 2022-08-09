import React, { useState } from 'react';
import Question from './Quiz-Questions';
import Result from './Quiz-Results';
import style from './style.module.scss';

export default function Quiz() {

	return (
		<div className={style.quizCont}>
			<div>
				<h2>This is a quiz</h2>
				<div>This is where the question text should go</div>
			</div>
				<div className={style.quizAns}>
					<button className={style.quizBtn}>Answer 1</button>
					<button className={style.quizBtn}>Answer 2</button>
					<button className={style.quizBtn}>Answer 3</button>
					<button className={style.quizBtn}>Answer 4</button>
				</div>
		</div>
	);
}