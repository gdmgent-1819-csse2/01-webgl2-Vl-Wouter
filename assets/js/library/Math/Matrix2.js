export default class Matrix2 {

  /**
   * Two dimensional matrix
   * @param {*} items - Values for this matrix
   */
  constructor(items) {
    this.items = items || [
      0, 0,
      0, 0,
    ]
  }

  /**
   * Addition of Matrix
   * @param {Matrix2} b - Second matrix
   */
  add(b) {
    const a = this.items
    this.items = [
      a[0] + b[0], a[1] + b[1],
      a[2] + b[2], a[3] + b[3],
    ]
  }

  /**
   * Subtract Matrix
   * @param {Matrix2} b - Second matrix
   */
  sub(b) {
    const a = this.items
    this.items = [
      a[0] - b[0], a[1] - b[1],
      a[2] - b[2], a[3] - b[3],
    ]
  }

  /**
   * Multiplication Matrix
   * @param {Matrix2} b - Second matrix 
   */
  mul(b) {
    const a = this.items

    const res0_0 = (a[0] * b[0]) + (a[1] * b[2])
    const res0_1 = (a[0] * b[1]) + (a[1] * b[3])

    const res1_0 = (a[2] * b[0]) + (a[3] * b[2])
    const res1_1 = (a[2] * b[1]) + (a[3] * b[3])

    this.items = [
      res0_0, res0_1,
      res1_0, res1_1,
    ]
  }

  /**
   * Rotate matrix around origin
   * @param {*} α - Anticlockwise angle (degrees)
   */
  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const a = this.items
    const r = [
      cos, -sin,
      sin, cos,
    ]
    this.mul(r)

  }
}