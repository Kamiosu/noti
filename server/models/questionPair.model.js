const mongoose = require('mongoose')

const QuestionPair = new mongoose.Schema({
    question: { type: String},
    answer: { type: String},
    notes: {type: String},
    user: {type : String},
    email: { type: String},
    school: { type: String},
    courseName: {type: String},
}, {collection: 'question-data'})

const model = mongoose.model('QuestionData', QuestionPair, 'questions')
module.exports = model