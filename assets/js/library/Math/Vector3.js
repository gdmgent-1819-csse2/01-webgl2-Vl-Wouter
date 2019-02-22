export default class Vector3 {

  /**
   * Three dimensional vector
   * @param {Number} xpos 
   * @param {Number} ypos 
   * @param {Number} zpos 
   */
  constructor(xpos, ypos, zpos) {
    this.x = Number(xpos) || 0
    this.y = Number(ypos) || 0
    this.z = Number(zpos) || 0
  }

  /**
   * Addition of 2 vectors
   * @param {Vector3} v 
   */
  add(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z
  }

  /**
   * Subtraction of 2 vectors
   * @param {Vector3} v 
   */
  sub(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
  }

  /**
   * Scalar multiplication
   * @param {Number} a 
   */
  scalar(a) {
    this.x *= a
    this.y *= a
    this.z *= a
  }

  /**
   * Length of the vector
   */
  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))
  }

  /**
   * Dot multiplication?
   * @param {Vector2} v 
   */
  dot(v) {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z)
  }
}