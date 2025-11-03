// testTodos.js
const ToDos = require('./todosLib');

// Add todos
console.log(ToDos.addOne("Go shopping", false, "2025-11-01"));
console.log(ToDos.addOne("Read a book", false, "2025-11-02"));

// Get all todos
console.log("All todos:", ToDos.getAll());

// Find by ID
console.log("Find todo with ID 1:", ToDos.findById(1));

// Update a todo
console.log("Update todo with ID 1:", ToDos.updateOneById(1, { completed: true }));
console.log("Find todo with ID 1 after update:", ToDos.findById(1));

// Delete a todo
console.log("Delete todo with ID 1:", ToDos.deleteOneById(1));
console.log("Find todo with ID 1 after delete:", ToDos.findById(1));
