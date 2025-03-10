const fs = require('fs');
const path = require('path');

// Path to the JSON file where tasks will be stored
const TASKS_FILE = path.join(__dirname, 'tasks.json');

// Load tasks from the JSON file
function loadTasks() {
    if (fs.existsSync(TASKS_FILE)) {
        const data = fs.readFileSync(TASKS_FILE);
        return JSON.parse(data);
    }
    return [];
}

// Save tasks to the JSON file
function saveTasks(tasks) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 4));
}

// Add a new task
function addTask(description) {
    const tasks = loadTasks();
    const task = {
        id: tasks.length + 1,
        description: description,
        status: 'not done', // Default status
    };
    tasks.push(task);
    saveTasks(tasks);
    console.log(`Task added: ${task.description}`);
}

// Update an existing task's description
function updateTask(taskId, description) {
    const tasks = loadTasks();
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
        task.description = description;
        saveTasks(tasks);
        console.log(`Task ${taskId} updated.`);
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
}

// Delete a task by its ID
function deleteTask(taskId) {
    let tasks = loadTasks();
    tasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(tasks);
    console.log(`Task ${taskId} deleted.`);
}

// List all tasks or filter by status (done, not done, in progress)
function listTasks(status = null) {
    const tasks = loadTasks();
    const filteredTasks = status ? tasks.filter((task) => task.status === status) : tasks;
    
    if (filteredTasks.length > 0) {
        filteredTasks.forEach((task) => {
            console.log(`ID: ${task.id} - ${task.description} - Status: ${task.status}`);
        });
    } else {
        console.log(status ? `No tasks found with status '${status}'.` : "No tasks available.");
    }
}

// Mark a task as in progress
function markInProgress(taskId) {
    const tasks = loadTasks();
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
        task.status = 'in progress';
        saveTasks(tasks);
        console.log(`Task ${taskId} marked as 'in progress'.`);
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
}

// Mark a task as done
function markDone(taskId) {
    const tasks = loadTasks();
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
        task.status = 'done';
        saveTasks(tasks);
        console.log(`Task ${taskId} marked as 'done'.`);
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
}

// Main function to handle the command line interface
function main() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.log("Usage: node task_tracker.js [command] [options]");
        process.exit(1);
    }

    const command = args[0];

    if (command === 'add' && args.length === 2) {
        addTask(args[1]);
    } else if (command === 'update' && args.length === 3) {
        updateTask(parseInt(args[1]), args[2]);
    } else if (command === 'delete' && args.length === 2) {
        deleteTask(parseInt(args[1]));
    } else if (command === 'list') {
        if (args.length === 2) {
            listTasks(args[1]);
        } else {
            listTasks();
        }
    } else if (command === 'in-progress' && args.length === 2) {
        markInProgress(parseInt(args[1]));
    } else if (command === 'done' && args.length === 2) {
        markDone(parseInt(args[1]));
    } else {
        console.log("Invalid command or arguments.");
        console.log("Usage: node task_tracker.js [command] [options]");
        process.exit(1);
    }
}

main();
