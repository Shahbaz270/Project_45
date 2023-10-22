function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

const magician_names2: string[] = ["Harry Houdini", "K Lal", "Akshey Laxman", "Teller"];

const modified_magician_names: string[] = make_great([...magician_names]); // Passing a copy of the array

show_magicians(magician_names);             // Display the original list
console.log("--------------");
show_magicians(modified_magician_names);    // Display the modified listcls

