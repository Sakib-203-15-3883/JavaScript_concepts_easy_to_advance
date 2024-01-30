const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user to enter a value
rl.question("Enter a number to find its factorial: ", (input) => {
  const value = parseInt(input);

  // Function to find factorial
  const findFactorial = (value) => {
    if (value === 1) {
      return 1;
    } else {
      return value * findFactorial(value - 1);
    }
  };

  // Calculate factorial
  const result = findFactorial(value);

  // Display the result
  console.log("Factorial of", value, "is:", result);

  rl.close();
});
