# JavaScript Coding Assessment Template (console.log → LocalHost)

A real-time console log visualization tool designed for developers working on coding problems who want to see their debug output on a separate screen (`localhost:3000`). This tool automatically mirrors all `console.log` statements from your `main.js` code to a clean, readable web interface.

## Tech Stack
- **Backend**: Node.js with Express
- **Real-time Communication**: Socket.IO
- **Frontend**: Plain HTML/CSS/JavaScript
- **Development**: Nodemon for auto-reloading
- **Testing**: Jest

## Overview
When solving coding problems, debugging with `console.log` statements is common practice. However, constantly switching between your code editor and terminal can break your flow. This tool allows you to:

- Write and debug your solution code in `main.js`
- See all console output in real-time on a separate browser window
- Maintain a history of console logs across code runs


## Getting Started

1. Clone this repository:
```bash
git clone [repository-url]
cd js-coding-assessment-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open `http://localhost:3000` in your browser

## Usage

The template is structured to help you focus on solving coding problems while providing real-time debugging feedback:

### Writing Your Solution

1. Navigate to the `ALGORITHM` section in `main.js`:
```javascript
//================================= ALGORITHM =================================//

function lengthOfLongestSubstring(s) {
    // Replace this function with your solution
    // Add console.log statements for debugging
}
```

2. Replace the sample function with your own solution code
3. Use `console.log` statements liberally for debugging - they'll appear in real-time on localhost

### Setting Up Test Cases

1. Find the `TESTS` section in `main.js`:
```javascript
const testCases = [
    { input: 'abcabcbb', expected: 3 },
    { input: 'bbbbb', expected: 1 },
    // Add your test cases here
];
```

2. Modify the test cases array to match your problem:
   - Each test case should be an object with `input` and `expected` properties
   - Adjust the data types to match your function's parameters

### Running Your Solution

1. Start the server: `npm start`
2. Open `http://localhost:3000` in your browser
3. Your console output will appear in real-time as you save changes to `main.js`
4. The test results will show which cases passed or failed

### Example Output

Your localhost page will display something like:
```
Processing string: "abcabcbb"
Processing character: a at index: 0
Current substring: "a" (length: 1)
Processing character: b at index: 1
Current substring: "ab" (length: 2)
...
Test Case 1: Passed ✓
```

## Project Structure

- `main.js` - Write your solution code here
- `server.js` - Express server and Socket.IO setup
- `index.html` - Web interface for console output
- `tests/` - Jest test files

## Running Tests

```bash
npm test
```

## Example

The repository includes a sample implementation of the "Longest Substring Without Repeating Characters" problem to demonstrate usage.

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC