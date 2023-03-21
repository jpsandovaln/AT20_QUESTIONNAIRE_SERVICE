/*
* @server.js Copyright(c) 2023 Jalasoft
* 2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
* Av.General Inofuentes esquina Calle20, Edificio Union No1376, La Paz, Bolivia
* All rights reserved
* This software is the confidential and proprietary information of
* Jalasoft,ConfidentialInformation"). You shall not
* disclose such Confidential Information and shall use it only in
* accordance with the terms of the license agreement you entered into
* with Jalasoft
*/

// Importing the express module. 
const express = require('express');
// Used to load environment variables from a .env file into process.env.
const dotenv = require('dotenv');

const app = express();
dotenv.config();
/* Used to start the server. */
app.get('/', (req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});