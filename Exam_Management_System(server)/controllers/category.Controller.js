const Category = require("../model/category..scema");

exports.createCategory = async (req, res) => {
  try {
    const { categoryName, description, startTime, endTime } = req.body;

    if (!categoryName || categoryName.trim() === '') {
        return res.status(400).json({ message: 'Category name is required' });
      }
  
      if (!description || description.trim() === '') {
        return res.status(400).json({ message: 'Description is required' });
      }
  
      if (!startTime || isNaN(new Date(startTime))) {
        return res.status(400).json({ message: 'Start time is required and must be a valid date' });
      }
  
      if (!endTime || isNaN(new Date(endTime))) {
        return res.status(400).json({ message: 'End time is required and must be a valid date' });
      }


    const newCategory = await Category.create(req.body);

    if (newCategory != null ||  Object.keys(newCategory).length > 2) {
        res.status(201).json({
          message: 'Category created successfully!',
          category: newCategory
        });
    } else {
        res.status(400).json({
          message: 'Failed to create category'
        });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate('questions');
  
      if(categories != null){
          res.status(200).json({
            message: 'Categories retrieved successfully!',
            categories
          });
      } 
      else{
        res.status(200).json({
            message: 'Failed to Categories retrieved !',
          });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getSpecificCategory = async (req, res) => {
    try {
      const { categoryId } = req.params;  
  
      const category = await Category.findById(categoryId).populate('questions');
  
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      
      res.status(200).json({
        message: 'Category retrieved successfully!',
        category,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
