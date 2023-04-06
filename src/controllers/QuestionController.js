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

const Question = require('./../services/Question');

class QuestionController {

	// gets a question by ID from DB
	async getQuestion(req, res) {
		const idQuestion = req.params.id;

		try {
			const question = await new Question().getQuestion(idQuestion);
			res.status(200).json(question);
		} catch (error) {
			res.status(200).json({"message":"Get Question Error"});
		}
	}
	// sets a question on a DB
	async setQuestion(req, res) {
		const question = await new Question().setQuestion(req.body);
		res.status(200).json({
			"message" : "the question was saved",
			...question});
	}
	// removes a question by ID from DB
	async removeQuestion(req, res) {
		const idQuestion = req.params.id;
		const questions = await new Question().removeQuestion(idQuestion);
		res.status(200).json(questions);
	}
}

module.exports = QuestionController;