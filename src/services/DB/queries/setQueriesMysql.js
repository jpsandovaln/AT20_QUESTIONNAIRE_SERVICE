const SetQueries = require("./setQueries");

class SetQueriesMysql extends SetQueries{

	constructor() {
		super();
	}

	setQuestion(question) {
		const textQuestion = question.question;
		const imgQuestion = question.imgSrc || '';
		const answerQuestion = question.answer || '';
		const IDTest = this.test[question.test];
		const IDType = this.type[question.type];

		return (`INSERT INTO questions (Question, answer, ImgScr, IDTest, IDType)
		  		 VALUES ('${textQuestion}', '${answerQuestion}', '${imgQuestion}', ${IDTest}, ${IDType});`);
	}

	setOptions(question) {
		let comand = 'INSERT INTO options (Label, Value, ImgSrc, IDQuestions)\n';
		for (let index = 0; index < question.options.length; index++) {
			let label = question.options[index].label
			let value = question.options[index].value
			let imgSrc = question.options[index].imgSrc || ''
			comand += `SELECT '${label}', '${value}', '${imgSrc}', LAST_INSERT_ID()\n`;
			if (index !== question.options.length - 1) {
				comand += 'UNION ALL\n';
			}
			
		}
		return comand + ';';
  	}
}
  
module.exports = SetQueriesMysql;
