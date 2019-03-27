export default class Matrix4 {

  /**
   * Four dimensional matrix
   * @param {Number[]} items - Values of this matrix
   */
  constructor(items) {
    this.items = items || [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]
  }

  /**
   * Addition of two matrix
   * @param {Matrix4} secondMatrix - Second matrix
   */
  add(secondMatrix) {
    const firstMatrix = this.items
    this.items = [
      (firstMatrix[0] + secondMatrix[0]), (firstMatrix[1] + secondMatrix[1]), (firstMatrix[2] + secondMatrix[2]), (firstMatrix[3] + secondMatrix[3]),
      (firstMatrix[4] + secondMatrix[4]), (firstMatrix[5] + secondMatrix[5]), (firstMatrix[6] + secondMatrix[6]), (firstMatrix[7] + secondMatrix[7]),
      (firstMatrix[8] + secondMatrix[8]), (firstMatrix[9] + secondMatrix[9]), (firstMatrix[10] + secondMatrix[10]), (firstMatrix[11] + secondMatrix[11]),
      (firstMatrix[12] + secondMatrix[12]), (firstMatrix[13] + secondMatrix[13]), (firstMatrix[14] + secondMatrix[14]), (firstMatrix[15] + secondMatrix[15]),
    ]
  }

  /**
   * Subtraction of two matrix
   * @param {Matrix4} secondMatrix - Second matrix
   */
  sub(secondMatrix) {
    const firstMatrix = this.items

    this.items = [
      (firstMatrix[0] - secondMatrix[0]), (firstMatrix[1] - secondMatrix[1]), (firstMatrix[2] - secondMatrix[2]), (firstMatrix[3] - secondMatrix[3]),
      (firstMatrix[4] - secondMatrix[4]), (firstMatrix[5] - secondMatrix[5]), (firstMatrix[6] - secondMatrix[6]), (firstMatrix[7] - secondMatrix[7]),
      (firstMatrix[8] - secondMatrix[8]), (firstMatrix[9] - secondMatrix[9]), (firstMatrix[10] - secondMatrix[10]), (firstMatrix[11] - secondMatrix[11]),
      (firstMatrix[12] - secondMatrix[12]), (firstMatrix[13] - secondMatrix[13]), (firstMatrix[14] - secondMatrix[14]), (firstMatrix[15] - secondMatrix[15]),
    ]
  }

  /**
   * Multiplication matrix
   * @param {Matrix4} secondMatrix - Second matrix
   */
  mul(secondMatrix) {
    const firstMatrix = this.items

    const res0_0 = (firstMatrix[0] * secondMatrix[0]) + (firstMatrix[1] * secondMatrix[4]) + (firstMatrix[2] * secondMatrix[8]) + (firstMatrix[3] * secondMatrix[12])
    const res0_1 = (firstMatrix[0] * secondMatrix[1]) + (firstMatrix[1] * secondMatrix[5]) + (firstMatrix[2] * secondMatrix[9]) + (firstMatrix[3] * secondMatrix[13])
    const res0_2 = (firstMatrix[0] * secondMatrix[2]) + (firstMatrix[1] * secondMatrix[6]) + (firstMatrix[2] * secondMatrix[10]) + (firstMatrix[3] * secondMatrix[14])
    const res0_3 = (firstMatrix[0] * secondMatrix[3]) + (firstMatrix[1] * secondMatrix[7]) + (firstMatrix[2] * secondMatrix[11]) + (firstMatrix[3] * secondMatrix[15])

    const res1_0 = (firstMatrix[4] * secondMatrix[0]) + (firstMatrix[5] * secondMatrix[4]) + (firstMatrix[6] * secondMatrix[8]) + (firstMatrix[7] * secondMatrix[12])
    const res1_1 = (firstMatrix[4] * secondMatrix[1]) + (firstMatrix[5] * secondMatrix[5]) + (firstMatrix[6] * secondMatrix[9]) + (firstMatrix[7] * secondMatrix[13])
    const res1_2 = (firstMatrix[4] * secondMatrix[2]) + (firstMatrix[5] * secondMatrix[6]) + (firstMatrix[6] * secondMatrix[10]) + (firstMatrix[7] * secondMatrix[14])
    const res1_3 = (firstMatrix[4] * secondMatrix[3]) + (firstMatrix[5] * secondMatrix[7]) + (firstMatrix[6] * secondMatrix[11]) + (firstMatrix[7] * secondMatrix[15])

    const res2_0 = (firstMatrix[8] * secondMatrix[0]) + (firstMatrix[9] * secondMatrix[4]) + (firstMatrix[10] * secondMatrix[8]) + (firstMatrix[11] * secondMatrix[12])
    const res2_1 = (firstMatrix[8] * secondMatrix[1]) + (firstMatrix[9] * secondMatrix[5]) + (firstMatrix[10] * secondMatrix[9]) + (firstMatrix[11] * secondMatrix[13])
    const res2_2 = (firstMatrix[8] * secondMatrix[2]) + (firstMatrix[9] * secondMatrix[6]) + (firstMatrix[10] * secondMatrix[10]) + (firstMatrix[11] * secondMatrix[14])
    const res2_3 = (firstMatrix[8] * secondMatrix[3]) + (firstMatrix[9] * secondMatrix[7]) + (firstMatrix[10] * secondMatrix[11]) + (firstMatrix[11] * secondMatrix[15])

    const res3_0 = (firstMatrix[12] * secondMatrix[0]) + (firstMatrix[13] * secondMatrix[4]) + (firstMatrix[14] * secondMatrix[8]) + (firstMatrix[15] * secondMatrix[12])
    const res3_1 = (firstMatrix[12] * secondMatrix[1]) + (firstMatrix[13] * secondMatrix[5]) + (firstMatrix[14] * secondMatrix[9]) + (firstMatrix[15] * secondMatrix[13])
    const res3_2 = (firstMatrix[12] * secondMatrix[2]) + (firstMatrix[13] * secondMatrix[6]) + (firstMatrix[14] * secondMatrix[10]) + (firstMatrix[15] * secondMatrix[14])
    const res3_3 = (firstMatrix[12] * secondMatrix[3]) + (firstMatrix[13] * secondMatrix[7]) + (firstMatrix[14] * secondMatrix[11]) + (firstMatrix[15] * secondMatrix[15])

    this.items = [
      res0_0, res0_1, res0_2, res0_3,
      res1_0, res1_1, res1_2, res1_3,
      res2_0, res2_1, res2_2, res2_3,
      res3_0, res3_1, res3_2, res3_3,
    ]
  }

  /**
   * Rotate matrix around origin
   * @param {Number} α - Anticlockwise angle (degrees) 
   */
  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const r = [
      cos, -sin, 0, 0,
      sin, cos, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]
    this.mul(r)
  }
}