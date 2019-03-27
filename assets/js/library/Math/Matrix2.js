/** Class representing a 2×2 matrix. */
export default class Matrix2 {
    /**
     * Create a 2×2 matrix.
     * @param {Array} elements - The matrix elements.
     */
    constructor(elements) {
        this.elements = elements || [
            0, 0,
            0, 0,
        ]
    }

    /**
     * Addition of a matrix to the current matrix.
     * @param {Array} secondMatrix - The second matrix.
     */
    add(secondMatrix) {
        const firstMatrix = this.elements
        this.elements = [
            firstMatrix[0] + secondMatrix[0], firstMatrix[1] + secondMatrix[1],
            firstMatrix[2] + secondMatrix[2], firstMatrix[3] + secondMatrix[3],
        ]
    }

    /**
     * Subtraction of a matrix from the current matrix.
     * @param {Array} secondMatrix - The second matrix.
     */
    sub(secondMatrix) {
        const firstMatrix = this.elements
        this.elements = [
            firstMatrix[0] - secondMatrix[0], firstMatrix[1] - secondMatrix[1],
            firstMatrix[2] - secondMatrix[2], firstMatrix[3] - secondMatrix[3],
        ]
    }

    /**
     * Multiplication of the current matrix by another matrix.
     * @param {Array} secondMatrix - The second matrix.
     */
    mul(secondMatrix) {
        const firstMatrix = this.elements
        const c = []
        c[0] = firstMatrix[0] * secondMatrix[0] + firstMatrix[1] * secondMatrix[2]
        c[1] = firstMatrix[0] * secondMatrix[1] + firstMatrix[1] * secondMatrix[3]
        c[2] = firstMatrix[2] * secondMatrix[0] + firstMatrix[3] * secondMatrix[2]
        c[3] = firstMatrix[2] * secondMatrix[1] + firstMatrix[3] * secondMatrix[3]

        this.elements = c
    }

    /**
     * Rotate the matrix around the origin.
     * @param {Number} α - The anticlockwise angle in degrees.
     */
    rot(α) {
        α *= Math.PI / 180
        const cos = Math.cos(α)
        const sin = Math.sin(α)
        const firstMatrix = this.elements
        const r = [
            cos, -sin,
            sin, cos,
        ]
        this.elements = r
        this.mul(firstMatrix);
    }
}