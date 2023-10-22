"use strict";
function show_magicians2(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great1(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
const magician_names1 = ["AS Jillani", "David ", "kuda bux", "M Yaseen"];
const great_magician_names = make_great(magician_names);
show_magicians(great_magician_names); // Display the modified list
