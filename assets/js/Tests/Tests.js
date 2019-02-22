import TestMatrix2 from './library/Math/TestMatrix2.js'
import TestMatrix3 from './library/Math/TestMatrix3.js'
import TestMatrix4 from './library/Math/TestMatrix4.js';
/**
 * Class to run tests
 */
export default class Tests {
  /**
   * Create tests
   */
  constructor() {
    //TODO: Build tests
    console.log("Running tests...")
    new TestMatrix2()
    new TestMatrix3()
    new TestMatrix4()
  }
}