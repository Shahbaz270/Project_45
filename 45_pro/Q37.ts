function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt();                       // Default large shirt with default message
make_shirt("medium");               // Medium shirt with default message
make_shirt("small", "Hello World!"); // Custom size and message
