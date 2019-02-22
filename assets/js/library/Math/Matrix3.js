export default class Matrix3 {

  /**
   * Three dimensional matrix
   * @param {Number[]} items 
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
   * @param {Matrix3} m_b 
   */
  add(m_b) {
    const a = this.items
    const b = m_b.items
    this.items = [
      (a[0] + b[0]), (a[1] + b[1]), (a[2] + b[2]),
      (a[3] + b[3]), (a[4] + b[4]), (a[5] + b[5]),
      (a[6] + b[6]), (a[7] + b[7]), (a[8] + b[8]),
    ]
  }

  /**
   * Subtraction of two matrix
   * @param {Matrix3} m_b 
   */
  sub(m_b) {
    const a = this.items
    const b = m_b.items
    this.items = [
      (a[0] - b[0]), (a[1] - b[1]), (a[2] - b[2]),
      (a[3] - b[3]), (a[4] - b[4]), (a[5] - b[5]),
      (a[6] - b[6]), (a[7] - b[7]), (a[8] - b[8]),
    ]
  }

  /**
   * Multiplication Matrix
   * @param {Matrix3} m_b 
   */
  mul(m_b) {
    const a = this.items
    const b = m_b.items

    const res0_0 = (a[0] * b[0]) + (a[1] * b[3]) + (a[2] * b[6])
    const res0_1 = (a[0] * b[1]) + (a[1] * b[4]) + (a[2] * b[7])
    const res0_2 = (a[0] * b[2]) + (a[1] * b[5]) + (a[2] * b[8])

    const res1_0 = (a[3] * b[0]) + (a[4] * b[3]) + (a[5] * b[6])
    const res1_1 = (a[3] * b[1]) + (a[4] * b[4]) + (a[5] * b[7])
    const res1_2 = (a[3] * b[2]) + (a[4] * b[5]) + (a[5] * b[8])

    const res2_0 = (a[6] * b[0]) + (a[7] * b[3]) + (a[8] * b[6])
    const res2_1 = (a[6] * b[1]) + (a[7] * b[4]) + (a[8] * b[7])
    const res2_2 = (a[6] * b[2]) + (a[7] * b[5]) + (a[8] * b[8])

    this.items = [
      res0_0, res0_1, res0_2,
      res1_0, res1_1, res1_2,
      res2_0, res2_1, res2_2,
    ]
  }
}