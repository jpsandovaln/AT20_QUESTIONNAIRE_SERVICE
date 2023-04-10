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

const GetQueries = require("./getQueries");
const QueriesExceptions = require("../../../exceptions/queriesExceptions")
class GetQueriesMysql extends GetQueries{

	constructor() {
		super();
	}

	/**
	* Returns a query to get a question
	* @param {string} idQuestion - it should be the ID of the question which you want to get  
	* @returns {string} - the query to get a question
	*/
	getQuestion(idQuestion) {
	  	return `SELECT * FROM questions WHERE IDQuestions = ${idQuestion};`;
	}

	/**
	* Returns a query to get a option
	* @param {string} idQuestion - it should be the ID question for a options group
	* @returns {string} - the query to get a option
	*/
	getOptions(idQuestion) {
		return `SELECT * FROM options WHERE IDQuestions = ${idQuestion};`;
  	}
	
	/**
	* Returns a query to get a Questionnaire
	* @param {string} test - it should be the name of the test which you want to get  
	* @returns {string} - the query to get a Questionnaire
	*/
	getQuestionnaire(test) {
		const IDTest = this.test[test];
		return (`select * from questions where IDTest = ${IDTest};`);
  	}
}
  
module.exports = GetQueriesMysql;