"use strict";
// Storing the current list of people to invite to dinner
const guestList4 = ["Isaac Newton", "Maya Angelou", "Rosa Parks", "Leonardo da Vinci", "Marie Curie", "Albert Einstein", "Nelson Mandela", "Ada Lovelace"];
// Printing current invitation messages to each person
for (const guest of guestList4) {
    console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
}
// Guests who can't make it
const guestsNotAvailable2 = ["Maya Angelou", "Leonardo da Vinci"];
for (const guest of guestsNotAvailable) {
    console.log(`${guest} can't make it to the dinner.`);
}
// Informing about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");
// Adding more guests to the list
const additionalGuests2 = ["Nelson Mandela", "Ada Lovelace"];
// Adding a new guest to the beginning of the array
guestList.unshift("Galileo Galilei");
// Adding a new guest to the middle of the array
const middleIndex1 = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Rosa Parks");
// Adding a new guest to the end of the array using append()
guestList.push(...additionalGuests);
// Printing message that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// Removing guests from the list until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Printing invitation messages to the two remaining people
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to a dinner at my place.`);
}
// Removing the last two names from the list
guestList.pop();
guestList.pop();
// Printing the final list to make sure it's empty
console.log("Final guest list:", guestList);
