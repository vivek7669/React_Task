const mongoose = require('mongoose');

// Define the Schema for Exam Question
const examQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,  // The question itself (e.g., "What is 2 + 2?")
    trim: true,
  },
  options: [{
    type: String
  }],
  correctAnswer: {
    type: String,
    required: true,  // The correct answer (e.g., "A: 4")
  },
  marks: {
    type: Number,
    default: 1,  // Marks assigned to the question
    min: 1,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref :"Category",
    required: true,  // Subject/category of the question (e.g., "Math", "Science")
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true,  // Difficulty of the question
  },
},{
    timestamps : true
});

// Create the model based on the schema
const ExamQuestion = mongoose.model('ExamQuestion', examQuestionSchema);

module.exports = ExamQuestion;
