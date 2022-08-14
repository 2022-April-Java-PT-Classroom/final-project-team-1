import React from "react";

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
			{ answerText: 'Adventurous', resultID: 1, pointvalue: 3, },
			{ answerText: 'Romantic', resultID: 2, pointvalue: 3, },
			{ answerText: 'Athletic', resultID: 3, pointvalue: 3, },
			{ answerText: 'Laid Back', resultID: 4, pointvalue: 3, },
		],
	},
	{
		questionText: 'Describe your partner\'s personality',
		answerOptions: [
			{ answerText: 'Adventurous', resultID: 1, pointvalue: 2, },
			{ answerText: 'Romantic', resultID: 2, pointvalue: 2, },
			{ answerText: 'Athletic', resultID: 3, pointvalue: 2, },
			{ answerText: 'Laid Back', resultID: 4, pointvalue: 2, },
		],
	},
	{
		questionText: 'How do you usually spend time with your partner?',
		answerOptions: [
			{ answerText: 'We eat dinner together', resultID: 1, pointvalue: 1, },
			{ answerText: 'We watch movies together', resultID: 2, pointvalue: 1, },
			{ answerText: 'We go out together', resultID: 3, pointvalue: 1, },
			{ answerText: 'We hang out with friends', resultID: 4, pointvalue: 1, },
		],
	},
	{
		questionText: 'How often do you and your partner get to go out?',
		answerOptions: [
			{ answerText: 'Once a week or less', resultID: 1, pointvalue: 4, },
			{ answerText: 'Every few days', resultID: 2, pointvalue: 4, },
			{ answerText: 'Every other day', resultID: 3, pointvalue: 4, },
			{ answerText: 'Every day', resultID: 4, pointvalue: 4, },
		]
	}
]

export default QuizQuestions;