const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user_id: [{
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: null
    }]
});

const UserModel = mongoose.model("courses", CourseSchema)
module.exports = CourseModel;