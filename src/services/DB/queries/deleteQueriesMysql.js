const DeleteQueries = require("./deleteQuerie");


class DeleteQueriesMysql extends DeleteQueries{

	constructor() {
		super();
	}

	deleteQuestion(idQuestion) {
	  	return `DELETE FROM questions WHERE IDQuestions = ${idQuestion};`;
	}

	deleteOptions(idQuestion) {
		return `DELETE FROM options WHERE IDQuestions = ${idQuestion};`;
  }

}
  
module.exports = DeleteQueriesMysql;
