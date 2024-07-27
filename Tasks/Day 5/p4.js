// Question 4: Creating a GET API with Express and Mongoose

// Continuing with the task management application, you need to create a GET API endpoint for retrieving a list of
// tasks from the database.

// Create a GET API endpoint /api/tasks that retrieve a list of all tasks from the database. Ensure it handles
// errors and responds with the list of tasks in JSON format.

app.post('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send(error);
    }
});