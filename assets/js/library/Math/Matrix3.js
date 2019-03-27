export default class Matrix3 {

  /**
   * Three dimensional matrix
   * @param {Number[]} items - Values of this matrix
   */
  constructor(items) {
    this.items = items || [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]
  }

  /**
   * Addition of two matrix
   * @param {Matrix3} secondMatrix - Second matrix
   */
  add(secondMatrix) {
    const firstMatrix = this.items
    this.items = [
      (firstMatrix[0] + secondMatrix[0]), (firstMatrix[1] + secondMatrix[1]), (firstMatrix[2] + secondMatrix[2]),
      (firstMatrix[3] + secondMatrix[3]), (firstMatrix[4] + secondMatrix[4]), (firstMatrix[5] + secondMatrix[5]),
      (firstMatrix[6] + secondMatrix[6]), (firstMatrix[7] + secondMatrix[7]), (firstMatrix[8] + secondMatrix[8]),
    ]
  }

  /**
   * Subtraction of two matrix
   * @param {Matrix3} secondMatrix - Second matrix
   */
  sub(secondMatrix) {
    const firstMatrix = this.items
    this.items = [
      (firstMatrix[0] - secondMatrix[0]), (firstMatrix[1] - secondMatrix[1]), (firstMatrix[2] - secondMatrix[2]),
      (firstMatrix[3] - secondMatrix[3]), (firstMatrix[4] - secondMatrix[4]), (firstMatrix[5] - secondMatrix[5]),
      (firstMatrix[6] - secondMatrix[6]), (firstMatrix[7] - secondMatrix[7]), (firstMatrix[8] - secondMatrix[8]),
    ]
  }

  /**
   * Multiplication Matrix
   * @param {Matrix3} secondMatrix - Second matrix
   */
  mul(secondMatrix) {
    const firstMatrix = this.items

    const res0_0 = (firstMatrix[0] * secondMatrix[0]) + (firstMatrix[1] * secondMatrix[3]) + (firstMatrix[2] * secondMatrix[6])
    const res0_1 = (firstMatrix[0] * secondMatrix[1]) + (firstMatrix[1] * secondMatrix[4]) + (firstMatrix[2] * secondMatrix[7])
    const res0_2 = (firstMatrix[0] * secondMatrix[2]) + (firstMatrix[1] * secondMatrix[5]) + (firstMatrix[2] * secondMatrix[8])

    const res1_0 = (firstMatrix[3] * secondMatrix[0]) + (firstMatrix[4] * secondMatrix[3]) + (firstMatrix[5] * secondMatrix[6])
    const res1_1 = (firstMatrix[3] * secondMatrix[1]) + (firstMatrix[4] * secondMatrix[4]) + (firstMatrix[5] * secondMatrix[7])
    const res1_2 = (firstMatrix[3] * secondMatrix[2]) + (firstMatrix[4] * secondMatrix[5]) + (firstMatrix[5] * secondMatrix[8])

    const res2_0 = (firstMatrix[6] * secondMatrix[0]) + (firstMatrix[7] * secondMatrix[3]) + (firstMatrix[8] * secondMatrix[6])
    const res2_1 = (firstMatrix[6] * secondMatrix[1]) + (firstMatrix[7] * secondMatrix[4]) + (firstMatrix[8] * secondMatrix[7])
    const res2_2 = (firstMatrix[6] * secondMatrix[2]) + (firstMatrix[7] * secondMatrix[5]) + (firstMatrix[8] * secondMatrix[8])

    this.items = [
      res0_0, res0_1, res0_2,
      res1_0, res1_1, res1_2,
      res2_0, res2_1, res2_2,
    ]
  }

  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const firstMatrix = this.items
    const r = [
      cos, -sin, 0,
      sin, cos, 0,
      0, 0, 0,
    ]
    this.mul(r)
  }
}