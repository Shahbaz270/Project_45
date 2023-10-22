function show_magicians2(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great1(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

const magician_names1: string[] = ["AS Jillani", "David ", "kuda bux", "M Yaseen"];

const great_magician_names: string[] = make_great(magician_names);

show_magicians(great_magician_names); // Display the modified list
