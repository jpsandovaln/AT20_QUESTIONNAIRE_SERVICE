class GetQueries {

	test = {
		"aptitude" : 1,
		"concentration" : 2,
		"logical" : 3,
		"reasoning" : 4,
		"spatial" : 5
	};	

	type = {
		"checkbox" : 1,
		"radiobutton" : 2
	};

	getQuestion(idQuestion) {
		throw new error("It should be implemented")
	}
	getOptions(idQuestion) {
		throw new error("It should be implemented")
	}
	getQuestionnaire(test) {
		throw new error("It should be implemented")
	}
}

module.exports = GetQueries;