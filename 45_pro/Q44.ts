function make_sandwich(...items: string[]): void {
    console.log("You ordered a sandwich with:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

make_sandwich("ham", "cheese", "lettuce");
console.log("-----------------------------");
make_sandwich("turkey", "bacon", "tomato", "avocado");
console.log("-----------------------------");
make_sandwich("peanut butter", "jelly");
