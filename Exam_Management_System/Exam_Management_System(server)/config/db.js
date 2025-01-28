require("dotenv").config();
const mongoose = require("mongoose");

const dbConnector = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL, {});
    
    // If connection is successful, log this message
    console.log('Database Connected Successfully.');
  } catch (error) {
    // If there's an error connecting to the database, log it
    console.error('Database Connection Failed:', error.message);
  }
};

module.exports = dbConnector;


module.exports = dbConnector;