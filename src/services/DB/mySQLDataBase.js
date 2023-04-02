const DataBase = require('./dataBase');
const mysql = require('mysql');

class MySQLDataBase extends DataBase {
    constructor(config) {
        super(config);
    }

    connect() {
        this.connection = mysql.createConnection(this.config);
    }

    execute(command) {
        return new Promise((resolve, reject) => {
        this.connection.query(command, (error, results, field) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            });
        });
    }

    disconnect() {
        if (this.connection) {
        this.connection.end();
        this.connection = null;
        }
    }
}

module.exports = MySQLDataBase;
