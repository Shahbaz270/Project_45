"use strict";
// Storing a list of countries and capitals in an array of objects
const countriesAndCapitals = [
    { country: "Pakistan", capital: "Islamabad" },
    { country: "United States", capital: "Washington, D.C." },
    { country: "United Kingdom", capital: "London" },
    { country: "France", capital: "Paris" },
    { country: "Germany", capital: "Berlin" },
    { country: "Japan", capital: "Tokyo" }
];
// Printing the list of countries and capitals
for (const item of countriesAndCapitals) {
    console.log(`The capital of ${item.country} is ${item.capital}.`);
}
