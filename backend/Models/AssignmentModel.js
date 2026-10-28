const mongoose = require('mongoose');
const { Schema } = mongoose;

const AssignmentSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    },
    total_marks: {
        type: String,
        required: true
    },
    course_id: {
        type: Schema.Types.ObjectId,
        ref: 'courses',
        default: null
    }
});

const AssignmentModel = mongoose.model("assignments", AssignmentSchema)
module.exports = AssignmentModel;