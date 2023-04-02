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

const MySQLDataBase = require("./DB/mySQLDataBase");
const dotenv = require('dotenv');
const loggerService = require("../../loggerService");
const GetQueriesMysql = require("./DB/queries/getQueriesMysql");
dotenv.config();

class Quiestionnarie {

	#configbd = {
		host: process.env.HOST_DATA_BASE,
		user: 'root',
		password: process.env.MYSQL_ROOT_PASSWORD,
		database: process.env.DATABASE_NAME
	};

	// gets a Questionnaire for a test
	async getQuestionnaire(test) {

		const db = new MySQLDataBase(this.#configbd);
		const getComand = new GetQueriesMysql();
		let response = [];
		db.connect();
		try {
			db.connect();
			const questions = await db.execute(getComand.getQuestionnaire(test));
			let options;
			for (let index = 0; index < questions.length; index++) {
				options = await db.execute(getComand.getOptions(questions[index].IDQuestions));
				response.push({
				...questions[index],
				"options" : options});
			}
			return response;

		} catch (error) {
			loggerService.info(error.message);
		} finally {
			db.disconnect();
		}
	}
}
module.exports = Quiestionnarie;
