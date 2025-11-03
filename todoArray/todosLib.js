// todosLib.js

let todosArray = [];
let nextId = 1;

// Add a todo
function addOne(task, completed = false, dueDate) {
    if (!task || !dueDate) return false;

    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo;
}

// Get all todos
function getAll() {
    return todosArray;
}

// Find todo by ID
function findById(id) {
    const numericId = Number(id);
    const todo = todosArray.find(item => item.id === numericId);
    return todo || false;
}

// Update todo by ID
function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        if (updatedData.task !== undefined) todo.task = updatedData.task;
        if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
        if (updatedData.dueDate !== undefined) todo.dueDate = updatedData.dueDate;
        return todo;
    }
    return false;
}

// Delete todo by ID
function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(t => t.id !== Number(id));
        return todosArray.length < initialLength;
    }
    return false;
}

// Optional: test the module when run directly
if (require.main === module) {
    console.log("Adding todos:");
    console.log(addOne("Buy groceries", false, "2025-08-30"));
    console.log(addOne("Clean room", false, "2025-08-31"));

    console.log("\nAll todos:", getAll());

    console.log("\nFind todo with ID 1:", findById(1));

    console.log("\nUpdate todo with ID 1:", updateOneById(1, { completed: true }));
    console.log("Find todo with ID 1 after update:", findById(1));

    console.log("\nDelete todo with ID 1:", deleteOneById(1));
    console.log("Find todo with ID 1 after delete:", findById(1));
}

// Export the module
const ToDos = { getAll, addOne, findById, updateOneById, deleteOneById };
module.exports = ToDos;
