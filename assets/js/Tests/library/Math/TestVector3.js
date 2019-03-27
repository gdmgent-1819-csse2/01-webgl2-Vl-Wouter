import Vector3 from '../../../library/Math/Vector3.js'
import TestMatrix from './TestMatrix.js'

/**
 * Class to test Vector3
 */
export default class TestVector3 extends TestMatrix {
  /**
   * Create and run tests
   */
  constructor() {
    super()
    console.info("Testing Vector3")
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testNorm()
    this.testDot()
    this.testRot()
  }

  /**
   * Test Vector3.add()
   */
  testAdd() {
    console.info("Test: Vector3.add()")
    const firstVector = new Vector3(2, 4, 6)
    const secondVector = new Vector3(4, 5, 6)

    const expected = [6, 9, 12]

    firstVector.add(secondVector)
    const actual = [firstVector.x, firstVector.y, firstVector.z]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector3.sub()
   */
  testSub() {
    console.info("Test: Vector3.sub()")
    const firstVector = new Vector3(1, 4, 6)
    const secondVector = new Vector3(4, 8, 6)

    const expected = [-3, -4, 0]

    firstVector.sub(secondVector)
    const actual = [firstVector.x, firstVector.y, firstVector.z]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector3.scalar()
   */
  testScalar() {
    console.info("Test: Vector3.sub()")
    const firstVector = new Vector3(2, 5, 8)
    const s = 10

    const expected = [20, 50, 80]

    firstVector.scalar(s)
    const actual = [firstVector.x, firstVector.y, firstVector.z]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector3.norm()
   */
  testNorm() {
    console.info("Test: Vector3.norm()")
    const firstVector = new Vector3(3, 4, 5)

    const expected = [7]

    const actual = [firstVector.norm()]
    this.assertIdenticalRounded(actual, expected)
  }

  /**
   * Test Vector3.dot()
   */
  testDot() {
    console.info("Test: Vector3.dot()")
    const firstVector = new Vector3(1, 2, 3)
    const secondVector = new Vector3(4, 5, 6)

    const expected = [32]

    const actual = [firstVector.dot(secondVector)]
    this.assertIdentical(actual, expected)
  }

  /**
   * Test Vector3.rot()
   */
  testRot() {
    console.info("Test: Vector4.rot()")
    const firstVector = new Vector3(2, 4, 6)
    const α = 90

    const expected = [0, 0, 0]

    firstVector.rot(α)
    const actual = [firstVector.x, firstVector.y, firstVector.z]
    this.assertIdenticalRounded(actual, expected)
  }
}