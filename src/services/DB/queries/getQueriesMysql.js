const GetQueries = require("./getQueries");

class GetQueriesMysql extends GetQueries{

	constructor() {
		super();
	}

	getQuestion(idQuestion) {
	  	return `SELECT * FROM questions WHERE IDQuestions = ${idQuestion};`;
	}

	getOptions(idQuestion) {
		return `SELECT * FROM options WHERE IDQuestions = ${idQuestion};`;
  	}

	getQuestionnaire(test) {
		const IDTest = this.test[test];
		return (`select * from questions where IDTest = ${IDTest};`);
  	}
}
  
module.exports = GetQueriesMysql;