require('./server');

//████████████████████████████████████████████████ ALGORITHM █████████████████████████████████████████████████████//

function lengthOfLongestSubstring(s) {
  console.log(`Processing string: "${s}"`);
  let maxLength = 0;
  let start = 0;
  const charIndexMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    console.log(`Processing character: ${char} at index: ${end}`);

    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      const oldStart = start;
      start = charIndexMap.get(char) + 1;
      console.log(`Found repeat character. Moving start from ${oldStart} to ${start}`);
    }

    charIndexMap.set(char, end);
    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
    console.log(`Current substring: "${s.slice(start, end + 1)}" (length: ${currentLength})`);
  }

  console.log(`Final result: ${maxLength}`);
  return maxLength;
}

//██████████████████████████████████████████████████ TESTS ████████████████████████████████████████████████████████//

const testCases = [
  { input: 'abcabcbb', expected: 3 },
  { input: 'bbbbb', expected: 1 },
  { input: 'pwwkew', expected: 3 },
];

function runTestCases(testCases, solutionFunc) {
  testCases.forEach(({ input, expected }, index) => {
    const separator = '━'.repeat(30);
    console.log(`\n${separator} Testing: "${input}" | Expected: ${expected} ${separator}\n`);

    const result = solutionFunc(input);
    console.log(`\nTest Case ${index + 1}: ${result === expected ? 'Passed ✓' : 'Failed ✗'}`);
  });
}

//███████████████████████████████████████████████████ RUN TESTS ██████████████████████████████████████████████████//

runTestCases(testCases, lengthOfLongestSubstring);

module.exports = lengthOfLongestSubstring;
