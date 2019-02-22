export default class Vector4 {
  /**
   * Four dimensional vector
   * @param {Number} xpos 
   * @param {Number} ypost 
   * @param {Number} zpos 
   * @param {Number} wpos 
   */
  constructor(xpos, ypos, zpos, wpos) {
    this.x = Number(xpos) || 0
    this.y = Number(ypos) || 0
    this.z = Number(zpos) || 0
    this.w = Number(wpos) || 0
  }

  /**
   * Addition of 2 vectors
   * @param {Vector4} v 
   */
  add(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z
    this.w += v.w
  }

  /**
   * Subtraction of two vectors
   * @param {Vector4} v 
   */
  sub(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
    this.w -= v.w
  }

  /**
   * Scalar multiplication
   * @param {Number} a 
   */
  scalar(a) {
    this.x *= a
    this.y *= a
    this.z *= a
    this.w *= a
  }

  /**
   * Length of the vector
   */
  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) + Math.pow(this.w, 2))
  }

  /**
   * Dot multiplication?
   * @param {Vector4} v 
   */
  dot(v) {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z) + (this.w * v.w)
  }
}