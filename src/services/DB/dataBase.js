class DataBase {
	constructor(config) {
		this.config = config;
		this.connection = null;
	}
	
	connect(){
		throw new Error("It should be implemented")
	}

	execute(comand){
		throw new Error("It should be implemented")
	}

	disconnect(){
		throw new Error("It should be implemented")
	}
}

module.exports = DataBase;