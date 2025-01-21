const ExamQuestion = require('../model/questions.scema');
const Category = require('../model/category..scema');


exports.addExamQuestion = async (req, res) => {
  try {
    const { questionText, options, correctAnswer, marks, category, difficulty } = req.body;

    if (!questionText || !options || !correctAnswer || !marks || !category || !difficulty) {
        return res.status(400).json({ message: 'All fields are required' });
      }
    const categoryExist = await Category.findById(category);
    if (!categoryExist) {
      return res.status(400).json({ message: 'Category not found' });
    }

    const newQuestion = await ExamQuestion.create(req.body);
    
    categoryExist.questions.push(newQuestion._id); 
    await categoryExist.save();

   if(newQuestion != null){
      return res.status(201).json({
         message: 'Question added successfully!',
         question: newQuestion,
       });
   }
   else{
    return res.status(400).json({ message: 'Failed to add the question' });
   }
  } catch (error) {
    console.error(error);
     return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getExamQuestions = async (req, res) => {
  try {
    const questions = await ExamQuestion.find().populate('category');
    
    if (questions.length === 0) {
      return res.status(404).json({ message: 'No questions found' });
    }

    return res.status(200).json({
      message: 'Questions retrieved successfully!',
      questions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
