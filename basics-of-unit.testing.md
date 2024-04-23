# What is unit testing

A form of automated testing where we write code to test our code. It's an investment in quality. should write tests that help you debug your code and test it fully.

### `Benefits`

- Detects bugs early.
- Facilitates code refactoring. Reactoring is changing the structure of the code without changing it's behavior.
  e.g. moving a few lines to a function.
- Improves code quality
- Works as a documenttation on how our function should behave

### `About tests `

- Having no unit tests at all can be time consuming and hence expensive for the business
- On other hand, covering every line of code with tests, can be time consuming and expensive
- Always good to find how best unit tests works for you and your project.

### `Your unit tests`

- Should be maintainable, robust and trustworthy. This will make the variable and save you time and money

### `Types of tests`

#### `unit tests`

They verify the correctness of individual units or components of an application in isolation these units could be functions, classes or even small modules.
They are incredibly usseful for caching bugs early in the development process.

#### `integration tests`

They verify how different unit or components of your application work together as a whole. Help to identify issues that might arise when combining different units such as data flow problems, communication between modules and compatibility issues between components.

#### `end-to-end tests`

They are broadest type of tests focusing on testing the entire application as a whole. They simulate user interaction with the entire system from unser interfaces down to the beacn end services.
They are excellent for ensuring that our entire application works seamlessly from the users perspective.

### `Test Framework`

- a set of tools for writing and running tests. It includes a
  **test runner**,
  **assertion libraries to check if the code begaves as expected**
  **Mocking tools to replace certain modules with fakes to simulate different scenarios**
  **Test coverage tools for measuring how much of the code is tested and etc**
  e.g
  **Jest\*
  **Mocha*
  \*\*Jasmine*
  **Vitest\*
  **Cypress*
  \*\*Playwright*
