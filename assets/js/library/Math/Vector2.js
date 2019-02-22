import Matrix2 from './Matrix2.js'
/**
 * Two dimensional Vector
 */
export default class Vector2 {

  /**
   * Create a two dimensional vector
   * @param {Number} xpos 
   * @param {Number} ypos 
   */
  constructor(xpos, ypos) {
    this.x = Number(xpos) || 0
    this.y = Number(ypos) || 0
  }

  /**
   * Length of the vector
   */
  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }

  dot(v) {
    return (this.x * v.x) + (this.y * v.y)
  }

  /**
   * Addition of 2 vectors
   * @param {Vector2} v 
   */
  add(v) {
    this.x += v.x
    this.y += v.y
  }

  /**
   * Subtraction of 2 vectors
   * @param {Vector2} v 
   */
  sub(v) {
    this.x -= v.x
    this.y -= v.y
  }

  /**
   * Scalar multiplication
   * @param {Number} a 
   */
  scalar(a) {
    this.x *= a
    this.y *= a
  }

  /**
   * Rotate vector around origin
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rot(α) {
    const m = new Matrix2([this.x, 0, this.y, 0])
    m.rot(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[2]
  }
}