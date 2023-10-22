"use strict";
// Storing the current list of people to invite to dinner
const guestList2 = ["Maria", "Aslam", "Shahzad"];
// Printing current invitation messages to each person
for (const guest of guestList2) {
    console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
}
// Guests who can't make it
const guestsNotAvailable1 = ["Maria", "Aslam"];
for (const guest of guestsNotAvailable1) {
    console.log(`${guest} can't make it to the dinner.`);
}
// Adding more guests to the list
const additionalGuests = ["Imran", "Bilal", "Kiran"];
guestList.push(...additionalGuests);
// Printing new invitation messages to each person, including the new guests
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
}
// Storing the current list of people to invite to dinner
const guestList3 = ["Maya Angelou", "Leonardo da Vinci", "Marie Curie"];
// Printing current invitation messages to each person
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
}
// Guests who can't make it
const guestsNotAvailable = ["Maya Angelou", "Leonardo da Vinci"];
for (const guest of guestsNotAvailable) {
    console.log(`${guest} can't make it to the dinner.`);
}
// Informing about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");
// Adding more guests to the list
const additionalGuests1 = ["Albert Einstein", "Nelson Mandela", "Ada Lovelace"];
// Adding a new guest to the beginning of the array
guestList.unshift("Isaac Newton");
// Adding a new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Rosa Parks");
// Adding a new guest to the end of the array using append()
guestList.push(...additionalGuests);
// Printing new invitation messages to each person, including the new guests
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
}
