// Storing travel destinations in an array (not in alphabetical order)
const travelDestinations: string[] = ["Tokyo", "Paris", "Bora Bora", "New York", "Rome"];

// Printing the original array
console.log("Original order:", travelDestinations);

// Printing the array in alphabetical order (without modifying the actual list)
console.log("Alphabetical order:", [...travelDestinations].sort());

// Showing that the original array is still in its order
console.log("Original order:", travelDestinations);

// Printing the array in reverse alphabetical order
console.log("Reverse alphabetical order:", [...travelDestinations].sort().reverse());

// Showing that the original array is still in its order
console.log("Original order:", travelDestinations);

// Reversing the order of the array
travelDestinations.reverse();
console.log("Reversed order:", travelDestinations);

// Reversing the order of the array again to restore its original order
travelDestinations.reverse();
console.log("Original order:", travelDestinations);

// Sorting the array in alphabetical order
travelDestinations.sort();
console.log("Sorted in alphabetical order:", travelDestinations);

// Sorting the array in reverse alphabetical order
travelDestinations.sort().reverse();
console.log("Sorted in reverse alphabetical order:", travelDestinations);
