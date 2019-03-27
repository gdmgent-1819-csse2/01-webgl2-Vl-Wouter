import Matrix3 from './Matrix3.js'
/**
 * Three dimensional vector
 */
export default class Vector3 {

  /**
   * Create scale three dimensional vector
   * @param {Number} xpos - position on X-axis
   * @param {Number} ypos - position on Y-axis
   * @param {Number} zpos - position on Z-axis
   */
  constructor(xpos, ypos, zpos) {
    this.x = Number(xpos) || 0
    this.y = Number(ypos) || 0
    this.z = Number(zpos) || 0
  }

  /**
   * Addition of 2 vectors
   * @param {Vector3} secondVector - Second vector
   */
  add(secondVector) {
    this.x += secondVector.x
    this.y += secondVector.y
    this.z += secondVector.z
  }

  /**
   * Subtraction of 2 vectors
   * @param {Vector3} secondVector - Second vector
   */
  sub(secondVector) {
    this.x -= secondVector.x
    this.y -= secondVector.y
    this.z -= secondVector.z
  }

  /**
   * Scalar multiplication
   * @param {Number} scale - Number to multiply by
   */
  scalar(scale) {
    this.x *= scale
    this.y *= scale
    this.z *= scale
  }

  /**
   * Length of the vector
   */
  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))
  }

  /**
   * Dot product of two vectors
   * @param {Vector2} secondVector - Second vector
   */
  dot(secondVector) {
    return (this.x * secondVector.x) + (this.y * secondVector.y) + (this.z * secondVector.z)
  }

  /**
   * Rotate vector around origin
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rot(α) {
    const matrix = new Matrix3([
      this.x, 0, 0,
      this.y, 0, 0,
      this.z, 0, 0
    ])
    matrix.rot(α)
    console.log(matrix)
    this.x = matrix.items[0]
    this.y = matrix.items[3]
    this.z = matrix.items[6]
  }
}