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


class Quiestionnarie {
	#idStudent;
	#questions;
	constructor(idStudent) {
		this.#idStudent = idStudent;
		this.#questions = [  
			{
				"id": 0,
				"question": "Question 0",
				"test" : "spacial",
				"imgSrc": "",
				"type" : "checkBox",
				"answer": "op2",
				"options": [
					{ "value": "op1", "label": "Opción 1" },
					{ "value": "op2", "label": "Opción 2" },
					{ "value": "op3", "label": "Opción 3" },
					{ "value": "op4", "label": "Opción 4" }
				]
			},
			{
				"id": 1,
				"question": "Question 1",
				"test" : "spacial",
				"imgSrc": "",
				"type" : "radioButton",
				"answer": "op1",
				"options": [
					{ "value": "op1", "label": "Opción 1" },
					{ "value": "op2", "label": "Opción 2" },
					{ "value": "op3", "label": "Opción 3" }
				]
			},
			{
				"id": 2,
				"question": "Question 2",
				"test" : "spacial",
				"imgSrc": "",
				"type" : "radioButton",
				"answer": "op2",
				"options": [
					{ "value": "op1", "label": "Opción 1" },
					{ "value": "op2", "label": "Opción 2" },
					{ "value": "op3", "label": "Opción 3" }
				]
			},
			{
				"id": 3,
				"question": "Question 3",
				"test" : "spacial",
				"imgSrc": "",
				"type" : "radioButton",
				"answer": "op2",
				"options": [
					{ "value": "op1", "label": "Opción 1" },
					{ "value": "op2", "label": "Opción 2" },
					{ "value": "op3", "label": "Opción 3" }
				]
			},
			{   
				"id": 4,
				"question": "Question 4",
				"test" : "spacial",
				"imgSrc": "",
				"type" : "radioButton",
				"answer": "op2",
				"options": [
					{ "value": "op1", "label": "Opción 1" },
					{ "value": "op2", "label": "Opción 2" },
					{ "value": "op3", "label": "Opción 3" }
				]
			}
		]
	}
	// gets a Questionnaire for a test
	getQuestionnaire(test) {
		//should be implemented.
		return new Promise(resolve => {
			setTimeout(() => {
			  resolve(this.#questions);
			}, 500);
		});
	}
}

module.exports = Quiestionnarie;
