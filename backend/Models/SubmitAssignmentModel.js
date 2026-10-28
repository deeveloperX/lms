const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubmitAssignmentSchema = new mongoose.Schema({
    answer:{
        type: String,
        required: true
    },
    obtain_marks: {
        type: String,
        required: false,
        default: null
    },
    assignment_id: {
        type: Schema.Types.ObjectId,
        ref: 'assignments',
        default: null
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: null
    }
});

const SubmitAssignmentModel = mongoose.model("submit_assignments", SubmitAssignmentSchema)
module.exports = SubmitAssignmentModel;