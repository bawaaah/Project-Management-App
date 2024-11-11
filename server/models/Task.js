const mongoose = require('mongoose')

const Task = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: True
    },
    dueDate: {
        type: Date,
        required: True
    },
    priority: {
        type: String,
        required: True
    }
})

const TaskModel = mongoose.model('TaskModel',Task)

module.exports = TaskModel