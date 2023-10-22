// Storing the original list of people to invite to dinner
const guestList1: string[] = ["Farhan", "Maria", "Aslam"];

// Printing original invitation messages to each person
for (const guest of guestList1) {
  console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
}

// Guest who can't make it
const guestNotAvailable: string = "Farhan";

console.log(`${guestNotAvailable} can't make it to the dinner.`);

// Modifying the guest list and replacing the guest
const newGuest: string = "Emric";
const indexOfGuestNotAvailable: number = guestList.indexOf(guestNotAvailable);
if (indexOfGuestNotAvailable !== -1) {
  guestList[indexOfGuestNotAvailable] = newGuest;
}

// Printing new invitation messages to each person
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
}
