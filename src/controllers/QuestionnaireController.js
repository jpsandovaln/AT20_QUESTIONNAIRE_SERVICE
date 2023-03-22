const Questionnaire = require("../services/Questionnaire")

class QuestionnaireController {
    //
    async getQuestionnaire(req, res) {
        const test = req.body.test;
        const questionnaire = await new Questionnaire().getQuestionnaire(test)
        res.status(200).json(questionnaire);
    }
}

module.exports = QuestionnaireController;
