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

const QuestionnaireRoutes = require('./src/routes/QuestionnaireRoutes')
const QuestionRoutes = require('./src/routes/QuestionRoutes')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors")
app.use(bodyParser.json());

// Used to load environment variables from a .env file into process.env.
const dotenv = require('dotenv');
const loggerService = require('./loggerService');
dotenv.config();
app.use(cors());
//routes
app.use('/api/v1.0/questionaire', QuestionnaireRoutes);
app.use('/api/v1.0/question', QuestionRoutes);

//welcome message
app.get('/', (req, res) => {
    res.send("Welcome to questionnaire service")
    req.body
})
// Uses to start the server.
const PORT = process.env.PORT || 9090;
//opens a port
app.listen(PORT, () => {
    loggerService.info(`Server running on port ${PORT}`);
});