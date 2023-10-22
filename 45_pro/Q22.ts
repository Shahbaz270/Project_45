// Intentionally causing an index error
const countriesAndCapitals1: { country: string; capital: string }[] = [
    {country:"Pakistan", capital: "Islamabad"},
    { country: "United States", capital: "Washington, D.C." },
    { country: "United Kingdom", capital: "London" },
    { country: "France", capital: "Paris" },
    { country: "Germany", capital: "Berlin" },
    { country: "Japan", capital: "Tokyo" }
  ];
  
  // Trying to access an index that doesn't exist to cause an error
  // The index should be within the range of the array's length
  const indexWithError = 10;  // Intentionally incorrect index
  
  // Correcting the index error and printing the corresponding country and capital
  if (indexWithError >= 0 && indexWithError < countriesAndCapitals.length) {
    const item = countriesAndCapitals[indexWithError];
    console.log(`The capital of ${item.country} is ${item.capital}.`);
  } else {
    console.log(`Invalid index: ${indexWithError}.`);
  }
  