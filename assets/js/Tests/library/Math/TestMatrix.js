/**
 * Parent class for test results
 */
export default class TestMatrix {
  /**
   * Check if two matrices are identical
   * @param {Array} actual - Actual result
   * @param {Array} expected - Expected result
   */
  assertIdentical(actual, expected) {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
        console.log(i, 'PASS', `actual: ${actual[i]}`)
      } else {
        console.error(i, 'FAIL', `actual: ${actual[i]},expected: ${expected[i]}`)
      }
    }
  }

  /**
   * Check if two matrices are identical after rounding
   * @param {Array} actual - Actual result
   * @param {Array} expected - Expected result
   */
  assertIdenticalRounded(actual, expected) {
    for (let i = 0; i < expected.length; i++) {
      const actualRounded = Math.round(actual[i])
      if (actualRounded === expected[i]) {
        console.log(i, 'PASS', `actual: ${actualRounded}`)
      } else {
        console.error(i, 'FAIL', `actual: ${actualRounded},expected: ${expected[i]}`)
      }
    }
  }
}