import Matrix2 from '../../../library/Math/Matrix2.js'

import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix2 class. */
export default class TestMatrix2 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix2')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        this.testRot()
    }

    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Matrix2.add()')
        const originalMatrix = [
            1, 2,
            3, 4,
        ]
        const secondMatrix = [
            5, 6,
            7, 8,
        ]
        const expected = [
            6, 8,
            10, 12,
        ]
        const m = new Matrix2(originalMatrix)
        m.add(secondMatrix)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix2.sub()')
        const firstMatrix = [
            1, 2,
            3, 4,
        ]
        const secondMatrix = [
            9, 8,
            7, 6,
        ]
        const expected = [
            -8, -6,
            -4, -2,
        ]
        const m = new Matrix2(firstMatrix)
        m.sub(secondMatrix)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix2.mul()')
        const firstMatrix = [
            1, 2,
            3, 4,
        ]
        const secondMatrix = [
            2, -1,
            -1, 2,
        ]
        const expected = [
            0, 3,
            2, 5,
        ]
        const m = new Matrix2(firstMatrix)
        m.mul(secondMatrix)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix2.mul() by identity matrix')
        const firstMatrix = [
            1, 2,
            3, 4,
        ]
        const i = [
            1, 0,
            0, 1,
        ]
        const expected = [
            1, 2,
            3, 4,
        ]
        const m = new Matrix2(firstMatrix)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the rotation method.
     */
    testRot() {
        console.info('test Matrix2.rot()')
        const α = 90
        const firstMatrix = [
            3, 0,
            1, 0,
        ]
        const expected = [
            -1, 0,
            3, 0,
        ]
        const m = new Matrix2(firstMatrix)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
}