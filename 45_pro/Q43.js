"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
const magician_names2 = ["Harry Houdini", "K Lal", "Akshey Laxman", "Teller"];
const modified_magician_names = make_great([...magician_names]); // Passing a copy of the array
show_magicians(magician_names); // Display the original list
console.log("--------------");
show_magicians(modified_magician_names); // Display the modified listcls
