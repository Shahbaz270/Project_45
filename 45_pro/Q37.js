"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}
make_shirt(); // Default large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello World!"); // Custom size and message
