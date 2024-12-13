'use strict';
/**
 // --------------------------------------------------------------------------------------
 //                        Problem: Amazon AI Software Evaluation
 // --------------------------------------------------------------------------------------
 * Problem Description:
 * To evaluate advanced AI software at Amazon, we have q different programs set to undergo
 * testing on n problems. Each problem has its own difficulty level difficulty[i] and a score tied
 * to its complexity. Each AI program also comes with a specific ability level denoted by
 * ability[i].
 * 
 * Each AI program will attempt each problem in order, and:
 * 1. If the program's ability meets or exceeds the problem's difficulty, the program successfully
 *    solves the problem and earns the score equal to that problem's difficulty.
 * 2. The program stops solving problems once it encounters a problem it cannot solve (where the
 *    difficulty is greater than its ability).
 * 
 * Parameters:
 * - ability[]: An array of size q representing the ability level of each AI software
 * - difficulty[]: An array of size n representing the difficulty level of each problem
 * 
 * Returns:
 * - A list of q integers where each integer represents the total score of each AI software
 * 
 * Constraints:
 * - 1 ≤ q,n ≤ 200,000
 * - 1 ≤ ability[i] ≤ 10^9
 * - 1 ≤ difficulty[i] ≤ 10^9
 * 
 * Goal: Calculate total scores for AI programs based on their ability to solve problems
   of varying difficulty levels.

 * Key Points:
 * - Each AI program has an ability level
 * - Each problem has a difficulty level
 * - Programs solve problems sequentially until they can't
 * - Score accumulates based
 **/

 // --------------------------------------------------------------------------------------
 //                                 P S E U D O C O D E 
 // --------------------------------------------------------------------------------------

/**
 * Thought Process:
 * 1. We need to process each AI program independently:
 *    - Outer loop will iterate through each AI's ability level
 *    - For each AI, we start with a score of 0
 * 
 * 2. For each AI program:
 *    - Inner loop will process problems sequentially
 *    - Compare AI's ability vs problem difficulty
 *    - Keep adding to score while AI can solve problems
 *    - Stop as soon as we hit a problem that's too difficult
 * 
 * 3. Edge Cases to Consider:
 *    - AI might not be able to solve any problems
 *    - All problems might be solvable
 *    - Empty input arrays
 * 
 * 4. Optimization Considerations:
 *    - We don't need to process remaining problems once we hit a failure
 *    - We can break the inner loop early
 *    - No need to sort since problems must be solved in order
 * 
 * Time Complexity: O(q * n) where:
 * - q is the number of AI programs
 * - n is the number of problems
 * 
 * Space Complexity: O(q) for storing the results array
 */

 // --------------------------------------------------------------------------------------
 //                                 C O D I N G  
 // --------------------------------------------------------------------------------------

// function getTotalScores(ability, difficulty) {
//     // Initialize array to store final scores for each AI program
//     let totalScores = [];
//     // Iterate through each AI program's ability level
//     for (let i = 0; i < ability.length; i++) {
//         // Start with score = 0 for current AI program
//         console.log("for ability:", ability[i]);
//         let score = 0;
//         // Store current AI's ability for better readability
//         let currentAbility = ability[i];
//         // Flag to track if AI has solved at least one problem
//         // This helps with edge cases where AI can't solve any problems
//         let hasSolvedProblem = false;
//         // Try each problem in sequence until we find one too difficult
//         for (let j = 0; j < difficulty.length; j++) {
//             let currentDifficulty = difficulty[j];
//             // Check if AI can solve this problem
//             if (currentAbility >= currentDifficulty) {
//                 // Add problem's difficulty score to total
//                 score += currentDifficulty;
//                 hasSolvedProblem = true;
//             } else {
//                 // If we can't solve this problem, stop trying further problems
//                 break;
//             }
//         }
//         // Add final score for this AI to our results array
//         totalScores.push(score);
//         console.log("totalScores:", totalScores); // Debug logging
//     }
//     return totalScores;
// }

// /**
//  * Main function to handle input processing and output formatting
//  * Reads input values and calls getTotalScores with proper parameters
//  */
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//     // Read number of AI programs (q)
//     const abilityCount = parseInt(readLine().trim(), 10);
//     let ability = [];

//     // Read ability levels for each AI program
//     for (let i = 0; i < abilityCount; i++) {
//         const abilityItem = parseInt(readLine().trim(), 10);
//         ability.push(abilityItem);
//     }
//     // Read number of problems (n)
//     const difficultyCount = parseInt(readLine().trim(), 10);
//     let difficulty = [];
//     // Read difficulty levels for each problem
//     for (let i = 0; i < difficultyCount; i++) {
//         const difficultyItem = parseInt(readLine().trim(), 10);
//         difficulty.push(difficultyItem);
//     }
//     // Get results and format output
//     const result = getTotalScores(ability, difficulty);
//     console.log("result:", result);
//     // Write formatted result to output stream
//     ws.write(result.join('\n') + '\n');
//     ws.end();
// }

// module.exports = getTotalScores;


// // --------------------------------------------------------------------------------------
// //                              T E S T     C A S E S
// // --------------------------------------------------------------------------------------

// // Test Case 1: Example from problem description
// console.log("\n-------------- Test Case 1:----------------");
// const test1Ability = [5, 1, 4];
// const test1Difficulty = [4, 1, 2, 5, 1];
// console.log("Ability Array:", test1Ability);
// console.log("Difficulty Array:", test1Difficulty);
// console.log("Expected Output: [13, 0, 7]");
// console.log("Actual Output:", getTotalScores(test1Ability, test1Difficulty));

// // Test Case 2: From additional example
// console.log("\n-----------------Test Case 2:--------------");
// const test2Ability = [2, 3];
// const test2Difficulty = [2, 1, 3, 1];
// console.log("Ability Array:", test2Ability);
// console.log("Difficulty Array:", test2Difficulty);
// console.log("Expected Output: [3, 7]");
// console.log("Actual Output:", getTotalScores(test2Ability, test2Difficulty));


// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟




// --------------------------------------------------------------------------------------
//                        Problem: Amazon Database Binary Error
// --------------------------------------------------------------------------------------
/**
 * Problem Description:
 * Amazon's database stores numbers as binary strings of '0' and '1'. Some positions contain
 * '?' representing unknown characters that could be either '0' or '1'. We need to:
 * 1. Count errors generated by subsequence '01' and '10'
 * 2. Find minimum total errors possible when replacing '?' with '0' or '1'
 * 3. Return result modulo (10^9 + 7)
 * 
 * Parameters:
 * - errorString: string containing only '0', '1', and '?'
 * 
 * Returns:
 * - Integer representing minimum possible errors modulo (10^9 + 7)
 * 
 * Constraints:
 * - 1 ≤ len(errorString) ≤ 10^5
 * - String contains only '0', '1', and '?'
 */

// --------------------------------------------------------------------------------------
//                                 P S E U D O C O D E 
// --------------------------------------------------------------------------------------
/**
 * Approach:
 * 1. For each '?' position, we need to try both '0' and '1'
 * 2. For each combination:
 *    - Count occurrences of '01' subsequence
 *    - Count occurrences of '10' subsequence
 *    - Calculate total errors = (3 * count_01) + (count_10)
 * 3. Track minimum errors found across all combinations
 * 4. Return minimum errors modulo (10^9 + 7)
 * 
 * Time Complexity: O(2^n) where n is number of '?' characters
 * Space Complexity: O(1)
 */

// --------------------------------------------------------------------------------------
//                                 C O D I N G 
// --------------------------------------------------------------------------------------
function getMinErrors(errorString) {
  // Helper function to count errors in a string
  function countErrors(str) {
      let errors = 0;
      
      // Count '01' errors (worth 3 points each)
      for (let i = 0; i < str.length - 1; i++) {
          if (str[i] === '0' && str[i + 1] === '1') {
              errors += 3;  // '01' is worth 3 errors
          }
      }
      
      // Count '10' errors (worth 1 point each)
      for (let i = 0; i < str.length - 1; i++) {
          if (str[i] === '1' && str[i + 1] === '0') {
              errors += 1;  // '10' is worth 1 error
          }
      }
      
      return errors;
  }
  
  // If no question marks, just count errors in the string
  if (!errorString.includes('?')) {
      return countErrors(errorString);
  }
  
  // Try replacing first ? with both 0 and 1
  let firstQuestionMark = errorString.indexOf('?');
  
  // Try with 0
  let tryWithZero = errorString.split('');
  tryWithZero[firstQuestionMark] = '0';
  let errorsWithZero = getMinErrors(tryWithZero.join(''));
  
  // Try with 1
  let tryWithOne = errorString.split('');
  tryWithOne[firstQuestionMark] = '1';
  let errorsWithOne = getMinErrors(tryWithOne.join(''));
  
  // Return the minimum of both tries
  return Math.min(errorsWithZero, errorsWithOne);
}


// --------------------------------------------------------------------------------------
//                              T E S T     C A S E S
// --------------------------------------------------------------------------------------

// Test Case 1: Example from problem
console.log("\n-------------- Test Case 1:----------------");
const test1 = "?1011?";
console.log("Input String:", test1);
console.log("Expected Output: 16");
console.log("Actual Output:", getMinErrors(test1));

// Test Case 2: All question marks
console.log("\n-------------- Test Case 2:----------------");
const test2 = "???";
console.log("Input String:", test2);
console.log("Expected Output: 0");
console.log("Actual Output:", getMinErrors(test2));

// Test Case 3: No question marks
console.log("\n-------------- Test Case 3:----------------");
const test3 = "01011";
console.log("Input String:", test3);
console.log("Expected Output: 4");
console.log("Actual Output:", getMinErrors(test3));

module.exports = getMinErrors;



