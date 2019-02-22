export default class Matrix2 {
  constructor(items) {
    this.items = items || [
      0, 0,
      0, 0,
    ]
  }

  /**
   * Addition of Matrix
   * @param {Matrix2} m_b 
   */
  add(m_b) {
    const a = this.items
    const b = m_b.items
    this.items = [
      a[0] + b[0], a[1] + b[1],
      a[2] + b[2], a[3] + b[3],
    ]
  }

  /**
   * Subtract Matrix
   * @param {Matrix2} m_b 
   */
  sub(m_b) {
    const a = this.items
    const b = m_b.items
    this.items = [
      a[0] - b[0], a[1] - b[1],
      a[2] - b[2], a[3] - b[3],
    ]
  }

  /**
   * Multiplication Matrix
   * @param {Matrix2} m_b 
   */
  mul(m_b) {
    const a = this.items
    const b = m_b.items
    this.items = [
      a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3],
      a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3],
    ]
  }
}