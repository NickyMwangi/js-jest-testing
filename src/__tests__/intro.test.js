const { max, FizzBuzz, Factorial } = require("../intro/intro");

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA => Arrange, Act, Assert
    expect(max(20, 10)).toBe(20);
  });

  it("should return the second argument if it is greater", () => {
    // AAA => Arrange, Act, Assert
    expect(max(10, 20)).toBe(20);
  });

  it("should return the second argument if they are equal", () => {
    // AAA => Arrange, Act, Assert
    expect(max(10, 10)).toBe(10);
  });
});

describe("FizzBuzz", () => {
  it("should return FizzBuzz if arg divisble by 3 and 5", () => {
    // AAA => Arrange, Act, Assert
    expect(FizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Buzz  if arg divisble by 3", () => {
    // AAA => Arrange, Act, Assert
    expect(FizzBuzz(21)).toBe("Fizz");
  });

  it("should return Fizz if arg divisble by  5", () => {
    // AAA => Arrange, Act, Assert
    expect(FizzBuzz(25)).toBe("Buzz");
  });

  it("should return value passed if arg not divisble by 3 or 5", () => {
    // AAA => Arrange, Act, Assert
    expect(FizzBuzz(26)).toBe("26");
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    // AAA => Arrange, Act, Assert
    expect(Factorial(0)).toBe(1);
  });

  it("should return 1 if given 1", () => {
    // AAA => Arrange, Act, Assert
    expect(Factorial(1)).toBe(1);
  });

  it("should return 6 if given 3", () => {
    // AAA => Arrange, Act, Assert
    expect(Factorial(3)).toBe(6);
  });

  it("should return undefined if arg is negative value", () => {
    // AAA => Arrange, Act, Assert
    expect(Factorial(-1)).toBeUndefined();
  });
});
