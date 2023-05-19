/* eslint-disable no-useless-constructor */
/* eslint-disable no-tabs */
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
const DeleteQueriesMysql = require('../../src/services/DB/queries/deleteQueriesMysql');

const deleteQueries = new DeleteQueriesMysql();
// Test for method deleteQuestion
describe('Tests for delete questions and options method ', () => {
    test('deleteQuestion method generates the correct query', () => {
        const questionId = 1;
        const expectedQuery = 'DELETE FROM questions WHERE IDQuestions = 1;';
        const deleteQuestionQuery = deleteQueries.deleteQuestion(questionId);
        expect(deleteQuestionQuery).toEqual(expectedQuery);
    });

    // Test for method deleteOptions
    test('deleteOptions method generates the correct query', () => {
        const optionId = 2;
        const expectedQuery = 'DELETE FROM options WHERE IDQuestions = 2;';
        const deleteOptionsQuery = deleteQueries.deleteOptions(optionId);
        expect(deleteOptionsQuery).toEqual(expectedQuery);
    });
});
