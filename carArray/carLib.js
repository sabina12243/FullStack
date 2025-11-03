// carLib.js

let carArray = [];
let nextId = 1;

// Add a car
function addOne(model, color, age) {
    if (!model || !color || !age) return false;

    const newCar = { id: nextId++, model, color, age };
    carArray.push(newCar);
    return newCar;
}

// Get all cars
function getAll() {
    return carArray;
}

// Find car by ID
function findById(id) {
    const numericId = Number(id);
    const car = carArray.find(item => item.id === numericId);
    return car || false;
}

// Update car by ID
function updateOneById(id, updatedData) {
    const car = findById(id);
    if (car) {
        if (updatedData.model) car.model = updatedData.model;
        if (updatedData.color) car.color = updatedData.color;
        if (updatedData.age) car.age = updatedData.age;
        return car;
    }
    return false;
}

// Delete car by ID
function deleteOneById(id) {
    const car = findById(id);
    if (car) {
        const initialLength = carArray.length;
        carArray = carArray.filter(c => c.id !== Number(id));
        return carArray.length < initialLength;
    }
    return false;
}

// Test the module when run directly
if (require.main === module) {
    console.log("Adding cars:");
    console.log(addOne("Corolla", "Red", 3));
    console.log(addOne("Civic", "Blue", 2));

    console.log("\nAll cars:", getAll());

    console.log("\nFind car with ID 1:", findById(1));

    console.log("\nUpdate car with ID 1:", updateOneById(1, { age: 4, color: "Black" }));
    console.log("Find car with ID 1 after update:", findById(1));

    console.log("\nDelete car with ID 1:", deleteOneById(1));
    console.log("Find car with ID 1 after delete:", findById(1));
}

// Export the module
const Car = { getAll, addOne, findById, updateOneById, deleteOneById };
module.exports = Car;
