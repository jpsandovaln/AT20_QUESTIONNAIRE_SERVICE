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

const DataBase = require('./dataBase');
const mysql = require('mysql');
const MysqlExceptions = require('../../exceptions/mysqlExceptions');


class MySQLDataBase extends DataBase {
    /**
    *@param {object} config - It should have the following properties: 
    *                        {
    *    		                 host: HOST_DATA_BASE,
	*	                         user: USER_DATA_BASE,
    *                            password: MYSQL_ROOT_PASSWORD,
    *                            database: DATABASE_NAME
    *                        }
    */
    constructor(config) {
        super(config);
    }
    // connects to DB
    connect() {
        try {
            this.connection = mysql.createConnection(this.config);
        } catch (error) {
            throw new MysqlExceptions(error.message, 500, "data base connect error")
        }

    }
    // executes a query
    execute(command) {
        return new Promise((resolve, reject) => {
        this.connection.query(command, (error, results, field) => {
            if (error) {
                this.#disconnect();
                throw new MysqlExceptions(error.message, 500, "data base connect error")
            } else {
                this.#disconnect();
                resolve(results);
            }
            });
        });
    }
    // disconnects to DB
    #disconnect() {
        if (this.connection) {
        this.connection.end();
        this.connection = null;
        }
    }
}

module.exports = MySQLDataBase;
