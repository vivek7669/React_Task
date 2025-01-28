const mongoose = require('mongoose');

// Define the Schema for Category
const categorySchema = new mongoose.Schema({
    categoryName: {
      type: String,
      required: true
    },
    description: {
      type : String
    },
    questions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ExamQuestion'
    }],
    startTime: Date,
    endTime: Date,
  },{
    timestamps : true
});

// Create the model based on the schema
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
