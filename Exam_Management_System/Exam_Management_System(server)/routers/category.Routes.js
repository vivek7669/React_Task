const express = require('express');
const categoryRoute = express.Router();
const { createCategory, getAllCategories, getSpecificCategory } = require('../controllers/category.Controller');

// POST request to create a new category
categoryRoute.post('/add', createCategory);

// GET request to get all categories
categoryRoute.get('/', getAllCategories);

// GET request to get categories with their questions
categoryRoute.get('/categories/:categoryId', getSpecificCategory);

module.exports = categoryRoute;
