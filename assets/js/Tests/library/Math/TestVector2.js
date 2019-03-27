import Vector2 from '../../../library/Math/Vector2.js'
import TestMatrix from './TestMatrix.js'

/**
 * Class to test Vector2
 */
export default class TestVector2 extends TestMatrix {
  /**
   * Create and run tests
   */
  constructor() {
    super()
    console.info("Testing Vector2")
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testNorm()
    this.testDot()
    this.testRot()
  }

  /**
   * Test Vector2.add()
   */
  testAdd() {
    console.info("Test: Vector2.add()")
    const firstVector = new Vector2(1.5, 2.5)

    const secondVector = new Vector2(3, 4)

    const expected = [4.5, 6.5]

    firstVector.add(secondVector)
    const actual = [firstVector.x, firstVector.y]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector2.sub()
   */
  testSub() {
    console.info("Test: Vector2.sub()")
    const firstVector = new Vector2(2, 4)

    const secondVector = new Vector2(4, 7)

    const expected = [-2, -3]

    firstVector.sub(secondVector)
    const actual = [firstVector.x, firstVector.y]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector2.scalar()
   */
  testScalar() {
    console.info("Test: Vector2.scalar()")
    const firstVector = new Vector2(1, 2)

    const s = 4

    const expected = [4, 8]

    firstVector.scalar(s)
    const actual = [firstVector.x, firstVector.y]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector2.norm()
   */
  testNorm() {
    console.info("Test: Vector2.norm()")
    const firstVector = new Vector2(3, 2)

    const expected = [4]

    const actual = [firstVector.norm()]
    this.assertIdenticalRounded(actual, expected)
  }

  /**
   * Test Vector2.dot()
   */
  testDot() {
    console.info("Test: Vector2.dot()")
    const firstVector = new Vector2(4, 5)

    const secondVector = new Vector2(3, 6)

    const expected = [42]

    const actual = [firstVector.dot(secondVector)]
    this.assertIdentical(actual, expected)
  }

  testRot() {
    console.info("Test: Vector2.rot()")
    const firstVector = new Vector2(1, 2)

    const α = 180

    const expected = [-1, -2]

    firstVector.rot(α)
    const actual = [firstVector.x, firstVector.y]
    this.assertIdenticalRounded(actual, expected)
  }
}