export default class Matrix4 {

  /**
   * Four dimensional matrix
   * @param {Number[]} items 
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
   * @param {Matrix4} m_b 
   */
  add(m_b) {
    const a = this.items
    const b = m_b.items
    this.items = [
      (a[0] + b[0]), (a[1] + b[1]), (a[2] + b[2]), (a[3] + b[3]),
      (a[4] + b[4]), (a[5] + b[5]), (a[6] + b[6]), (a[7] + b[7]),
      (a[8] + b[8]), (a[9] + b[9]), (a[10] + b[10]), (a[11] + b[11]),
      (a[12] + b[12]), (a[13] + b[13]), (a[14] + b[14]), (a[15] + b[15]),
    ]
  }

  /**
   * Subtraction of two matrix
   * @param {Matrix4} m_b 
   */
  sub(m_b) {
    const a = this.items
    const b = m_b.items
    this.items = [
      (a[0] - b[0]), (a[1] - b[1]), (a[2] - b[2]), (a[3] - b[3]),
      (a[4] - b[4]), (a[5] - b[5]), (a[6] - b[6]), (a[7] - b[7]),
      (a[8] - b[8]), (a[9] - b[9]), (a[10] - b[10]), (a[11] - b[11]),
      (a[12] - b[12]), (a[13] - b[13]), (a[14] - b[14]), (a[15] - b[15]),
    ]
  }

  /**
   * Multiplication matrix
   * @param {Matrix4} m_b 
   */
  mul(m_b) {
    const a = this.items
    const b = m_b.items

    const res0_0 = (a[0] * b[0]) + (a[1] * b[4]) + (a[2] * b[8]) + (a[3] * b[12])
    const res0_1 = (a[0] * b[1]) + (a[1] * b[5]) + (a[2] * b[9]) + (a[3] * b[13])
    const res0_2 = (a[0] * b[2]) + (a[1] * b[6]) + (a[2] * b[10]) + (a[3] + b[14])
    const res0_3 = (a[0] * b[3]) + (a[1] * b[7]) + (a[2] * b[11]) + (a[3] + b[15])

    const res1_0 = (a[4] * b[0]) + (a[5] * b[4]) + (a[6] * b[8]) + (a[7] * b[12])
    const res1_1 = (a[4] * b[1]) + (a[5] * b[5]) + (a[6] * b[9]) + (a[7] * b[13])
    const res1_2 = (a[4] * b[2]) + (a[5] * b[6]) + (a[6] * b[10]) + (a[7] * b[14])
    const res1_3 = (a[4] * b[3]) + (a[5] * b[7]) + (a[6] * b[11]) + (a[7] * b[15])

    const res2_0 = (a[8] * b[0]) + (a[9] * b[4]) + (a[10] * b[8]) + (a[11] * b[12])
    const res2_1 = (a[8] * b[1]) + (a[9] * b[5]) + (a[10] * b[9]) + (a[11] * b[13])
    const res2_2 = (a[8] * b[2]) + (a[9] * b[6]) + (a[10] * b[10]) + (a[11] * b[14])
    const res2_3 = (a[8] * b[3]) + (a[9] * b[7]) + (a[10] * b[11]) + (a[11] * b[15])

    const res3_0 = (a[12] * b[0]) + (a[13] * b[4]) + (a[14] * b[8]) + (a[15] * b[12])
    const res3_1 = (a[12] * b[1]) + (a[13] * b[5]) + (a[14] * b[9]) + (a[15] * b[13])
    const res3_2 = (a[12] * b[2]) + (a[13] * b[6]) + (a[14] * b[10]) + (a[15] * b[14])
    const res3_3 = (a[12] * b[3]) + (a[13] * b[7]) + (a[14] * b[11]) + (a[15] * b[15])

    this.items = [
      res0_0, res0_1, res0_2, res0_3,
      res1_0, res1_1, res1_2, res1_3,
      res2_0, res2_1, res2_2, res2_3,
      res3_0, res3_1, res3_2, res3_3,
    ]
  }
}