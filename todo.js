// Array of todo items
const todos = [
  { title: "Do homework", done: false },
  { title: "Clean the room", done: true },
  { title: "Buy groceries", done: false },
  { title: "Pay utility bills", done: true },
  { title: "Practice coding", done: false },
  { title: "Walk the dog", done: true }
];

// Filter completed tasks
const completedTasks = todos.filter(todo => todo.done);

// Filter ongoing tasks
const ongoingTasks = todos.filter(todo => !todo.done);

// Function to display tasks
function displayTasks(title, taskArray) {
  console.log(`\n${title}`);
  console.log("---------------");
  if (taskArray.length === 0) {
    console.log("No tasks found.");
  } else {
    taskArray.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title}`);
    });
  }
}

//  Display in console
console.log("Basic Todo List with Status Filter");
displayTasks("Done", completedTasks);
displayTasks("Ongoing", ongoingTasks);
