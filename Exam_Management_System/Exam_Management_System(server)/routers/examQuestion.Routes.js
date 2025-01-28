
const express = require('express');
const examRoute = express.Router();
const { addExamQuestion, getExamQuestions } = require('../controllers/examQuestion.Controller');

// Route to add a new exam question
examRoute.post('/add', addExamQuestion);
examRoute.get('/exam-questions', getExamQuestions);

module.exports = examRoute;
