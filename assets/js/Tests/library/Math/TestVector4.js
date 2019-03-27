import Vector4 from '../../../library/Math/Vector4.js'
import TestMatrix from './TestMatrix.js'

/**
 * Class to test Vector4
 */
export default class TestVector4 extends TestMatrix {
  /**
   * Create and run tests
   */
  constructor() {
    super()
    console.info("Testing Vector4")
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testNorm()
    this.testDot()
    this.testRot()
  }

  /**
   * Test Vector4.add()
   */
  testAdd() {
    console.info("Test: Vector4.add()")
    const firstVector = new Vector4(2, 4, 6, 10)
    const secondVector = new Vector4(4, 5, 6, 2)

    const expected = [6, 9, 12, 12]

    firstVector.add(secondVector)
    const actual = [firstVector.x, firstVector.y, firstVector.z, firstVector.w]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector4.sub()
   */
  testSub() {
    console.info("Test: Vector4.sub()")
    const firstVector = new Vector4(1, 4, 6, 0)
    const secondVector = new Vector4(4, 8, 6, 1)

    const expected = [-3, -4, 0, -1]

    firstVector.sub(secondVector)
    const actual = [firstVector.x, firstVector.y, firstVector.z, firstVector.w]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector4.scalar()
   */
  testScalar() {
    console.info("Test: Vector4.sub()")
    const firstVector = new Vector4(2, 5, 8, 10)
    const s = 10

    const expected = [20, 50, 80, 100]

    firstVector.scalar(s)
    const actual = [firstVector.x, firstVector.y, firstVector.z, firstVector.w]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector4.norm()
   */
  testNorm() {
    console.info("Test: Vector4.norm()")
    const firstVector = new Vector4(3, 4, 5, 6)

    const expected = [9]

    const actual = [firstVector.norm()]
    this.assertIdenticalRounded(actual, expected)
  }

  /**
   * Test Vector4.dot()
   */
  testDot() {
    console.info("Test: Vector4.dot()")
    const firstVector = new Vector4(1, 2, 3, 4)
    const secondVector = new Vector4(4, 5, 6, 7)

    const expected = [60]

    const actual = [firstVector.dot(secondVector)]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector4.rot()
   */
  testRot() {
    console.info("Test: Vector4.rot()")
    const firstVector = new Vector4(2, 4, 6, 7)
    const α = 180

    const expected = [-2, -4, -6, -7]

    firstVector.rot(α)
    const actual = [firstVector.x, firstVector.y, firstVector.z, firstVector.w]
    this.assertIdenticalRounded(actual, expected)
  }
}