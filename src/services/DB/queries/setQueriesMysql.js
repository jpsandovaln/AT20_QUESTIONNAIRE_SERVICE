/*
* Copyright(c) 2023 Jalasoft
* 2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
* Av.General Inofuentes esquina Calle20, Edificio Union No1376, La Paz, Bolivia
* All rights reserved
* This software is the confidential and proprietary information of
* Jalasoft,ConfidentialInformation"). You shall not
* disclose such Confidential Information and shall use it only in
* accordance with the terms of the license agreement you entered into
* with Jalasoft
*/

const SetQueries = require("./setQueries");

class SetQueriesMysql extends SetQueries{

	constructor() {
		super();
	}

	/**
	* Returns a query to set a question
	* @param {object} question - it should have the following properties:
	*			{
	*			"question": "what is .....",
	*			"test" : "logical",
	*			"imgSrc": "",
	*			"type" : "radiobutton",
	*			"answer": "op2",
	*			"options": [
	*				{ "value": "op1", "label": "Option 12" },
	*				{ "value": "op2", "label": "Option 22" },
	*				{ "value": "op3", "label": "Option 32" },
	*				{ "value": "op4", "label": "Option 42" }
	*				]
	*		    }  
	* @returns {string} - the query to set a question
	*/
	setQuestion(question) {
		const textQuestion = question.question;
		const imgQuestion = question.imgSrc || '';
		const answerQuestion = question.answer || '';
		const IDTest = this.test[question.test];
		const IDType = this.type[question.type];

		return (`INSERT INTO questions (Question, answer, ImgScr, IDTest, IDType)
		  		 VALUES ('${textQuestion}', '${answerQuestion}', '${imgQuestion}', ${IDTest}, ${IDType});`);
	}

	/**
	* Returns a query to set a options
	* @param {object} question - it should have the following properties:
	*			{
	*			"question": "what is .....",
	*			"test" : "logical",
	*			"imgSrc": "",
	*			"type" : "radiobutton",
	*			"answer": "op2",
	*			"options": [
	*				{ "value": "op1", "label": "Option 12" },
	*				{ "value": "op2", "label": "Option 22" },
	*				{ "value": "op3", "label": "Option 32" },
	*				{ "value": "op4", "label": "Option 42" }
	*				]
	*		    }  
	* @returns {string} - the query to set a options
	*/
	setOptions(question) {
		let command = 'INSERT INTO options (Label, Value, ImgSrc, IDQuestions)\n';
		for (let index = 0; index < question.options.length; index++) {
			let label = question.options[index].label
			let value = question.options[index].value
			let imgSrc = question.options[index].imgSrc || ''
			command += `SELECT '${label}', '${value}', '${imgSrc}', LAST_INSERT_ID()\n`;
			if (index !== question.options.length - 1) {
				command += 'UNION ALL\n';
			}
			
		}
		return command + ';';
  	}
}
  
module.exports = SetQueriesMysql;
