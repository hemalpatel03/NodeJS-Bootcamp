// Question 3: Creating a POST API with Express and Mongoose

// You're building a simple task management application. Your task is to create a POST API endpoint for adding
// new tasks to the database. Assume you've already set up an Express application and connected it to your
// MongoDB using Mongoose.


// a) Design the Mongoose schema for a "Task" with fields for "title," "description," "priority," and "dueDate."

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        Type: String,
        required: true,
        trim: true,
    },
    description: {
        Type: String,
        required: true,
    },
    priority: {
        Type: String,
        enum: ['high', 'medium', 'low'],
        default: 'medium',
    },
    dueDate: {
        Type: Data,
        required: true,
    },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;

// b) Create a POST API endpoint /api/tasks that allow clients to submit new tasks to the database. Ensure it
// handles request validation and responds with the newly created task.
// Ans:
// POST /api/tasks-Create a new task

app.post('/api/tasks', async (req, res) => {
    try {
        const task = new Task(res.body);
        await task.save();
        res.status(200).send(task);
    } catch (err) {
        res.status(500).send(error);
    }
});