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
const SetQueriesMysql = require("./DB/queries/setQueriesMysql");
const DeleteQueriesMysql = require("./DB/queries/deleteQueriesMysql");
dotenv.config();

class Questions {

	#configbd = {
		host: process.env.HOST_DATA_BASE,
		user: 'root',
		password: process.env.MYSQL_ROOT_PASSWORD,
		database: process.env.DATABASE_NAME
	};
	  
	// sets a question on a DB
	async setQuestion(question){
		const db = new MySQLDataBase(this.#configbd);
		const setComand = new SetQueriesMysql();
		loggerService.info(setComand.setQuestion(question));
		try {
			db.connect();
			await db.execute(setComand.setQuestion(question));
			await db.execute(setComand.setOptions(question));
			return question
		} catch (error) {
			loggerService.info(error.message);
		} finally {
			db.disconnect();
		}
		return question;
	}
	//gets a question by ID
	async getQuestion(idQuestion){
		const db = new MySQLDataBase(this.#configbd);
		const getComand = new GetQueriesMysql();

		try {
			db.connect();
			const question = await db.execute(getComand.getQuestion(idQuestion));
			const options = await db.execute(getComand.getOptions(idQuestion));
			return {...question[0],
					"options" : options
			};
		} catch (error) {
			loggerService.info(error.message);
		} finally {
			db.disconnect();
		}
	}
	//deletes a question by ID
	async removeQuestion(idQuestion){
		const db = new MySQLDataBase(this.#configbd);
		const deleteComand = new DeleteQueriesMysql();

		try {
			db.connect();
			await db.execute(deleteComand.deleteOptions(idQuestion));
			await db.execute(deleteComand.deleteQuestion(idQuestion));
			return {"Message" : "Question was deleted"}
		} catch (error) {
			loggerService.info(error.message);
		} finally {
			db.disconnect();
		}
	}
}

module.exports = Questions;