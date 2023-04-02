class SetQueries {
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

	setQuestion(question){
		throw new error("It should be implemented")
	}

	setOptions(question){
		throw new error("It should be implemented")
	}
}

module.exports = SetQueries;