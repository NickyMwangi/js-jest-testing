const max = (a, b) => {
  return a > b ? a : b;
};

const FizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
};

const Factorial = (n) => {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * Factorial(n - 1);
};

module.exports = { max, FizzBuzz, Factorial };
