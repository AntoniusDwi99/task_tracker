Task Tracker CLI

A simple command-line tool for managing tasks using Node.js. This application allows you to add, update, delete, and list tasks, and track their statuses (not done, in progress, or done).

Features

- Add a task: Add new tasks to the task list.
- Update a task: Modify the description of an existing task.
- Delete a task: Remove a task by its ID.
- List tasks: Display all tasks or filter them by their status.
- Mark task as in progress: Change the task's status to "in progress".
- Mark task as done: Mark a task as "done".

Requirements

- Node.js (v12 or later) should be installed on your system.
- `tasks.json` file will be automatically created in the root directory for storing tasks.

Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies (if any) via npm (not needed in this case since there are no external dependencies):
   npm install

Usage

Available Commands

1. Add a task
   To add a new task:
   node task_tracker.js add "Task description"

2. Update a task
   To update an existing task's description:
   node task_tracker.js update [taskId] "Updated task description"

3. Delete a task
   To delete a task by its ID:
   node task_tracker.js delete [taskId]

4. List tasks
   To list all tasks:
   node task_tracker.js list

   To list tasks filtered by a specific status (e.g., `not done`, `in progress`, `done`):
   node task_tracker.js list [status]

5. Mark a task as in progress
   To mark a task as "in progress":
   node task_tracker.js in-progress [taskId]

6. Mark a task as done
   To mark a task as "done":
   node task_tracker.js done [taskId]

Example

node task_tracker.js add "Finish project"
node task_tracker.js list
node task_tracker.js in-progress 1
node task_tracker.js done 1
node task_tracker.js delete 1

File Structure

- task_tracker.js: Main script containing the task tracker logic.
- tasks.json: JSON file where tasks are stored. This file will be automatically created if it does not exist.

License

MIT License - See LICENSE for details.