import Matrix4 from './Matrix4.js'
/**
 * Four dimensional vector
 */
export default class Vector4 {
  /**
   * Create a four dimensional vector
   * @param {Number} xpos - position on X-axis
   * @param {Number} ypos - position on Y-axis
   * @param {Number} zpos - position on Z-axis
   * @param {Number} wpos - position on W-axis
   */
  constructor(xpos, ypos, zpos, wpos) {
    this.x = Number(xpos) || 0
    this.y = Number(ypos) || 0
    this.z = Number(zpos) || 0
    this.w = Number(wpos) || 0
  }

  /**
   * Addition of 2 vectors
   * @param {Vector4} secondVector - Second vector
   */
  add(secondVector) {
    this.x += secondVector.x
    this.y += secondVector.y
    this.z += secondVector.z
    this.w += secondVector.w
  }

  /**
   * Subtraction of two vectors
   * @param {Vector4} secondVector - Second vector
   */
  sub(secondVector) {
    this.x -= secondVector.x
    this.y -= secondVector.y
    this.z -= secondVector.z
    this.w -= secondVector.w
  }

  /**
   * Scalar multiplication
   * @param {Number} scale - Number to multiply by
   */
  scalar(scale) {
    this.x *= scale
    this.y *= scale
    this.z *= scale
    this.w *= scale
  }

  /**
   * Length of the vector
   */
  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) + Math.pow(this.w, 2))
  }

  /**
   * Dot multiplication?
   * @param {Vector4} secondVector - Second vector
   */
  dot(secondVector) {
    return (this.x * secondVector.x) + (this.y * secondVector.y) + (this.z * secondVector.z) + (this.w * secondVector.w)
  }

  /**
   * Rotate vector around origin
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rot(α) {
    const matrix = new Matrix4([
      this.x, 0, 0, 0,
      this.y, 0, 0, 0,
      this.z, 0, 0, 0,
      this.w, 0, 0, 0,
    ])
    matrix.rot(α)
    console.log(matrix)
    this.x = matrix.items[0]
    this.y = matrix.items[4]
    this.z = matrix.items[8]
    this.w = matrix.items[12]
  }
}