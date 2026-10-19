const mongoose = require('mongoose');

// Connect to the local MongoDB Community Server instance
const conn = mongoose.connect('mongodb://127.0.0.1:27017/lms')
  if (conn){
    console.log("Project Start & Database Connected👍")
  }else{
    console.log("Database connection error👎")
  }
