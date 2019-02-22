import Vector2 from "./library/Math/Vector2.js"
import Matrix2 from "./library/Math/Matrix2.js"
import Vector3 from "./library/Math/Vector3.js"
import Matrix3 from "./library/Math/Matrix3.js"
import Vector4 from "./library/Math/Vector4.js"
import Matrix4 from "./library/Math/Matrix4.js"

export default class Application {

  constructor() {
    console.info('WebGL2 Demo')

    const v2_1 = new Vector2(1, 1.5)
    const v2_2 = new Vector2(-3, -0.5)

    console.log("Vector2")
    console.log('Start: ', v2_1, v2_2)
    v2_1.sub(v2_2)
    console.log('Sub: ', v2_1, v2_2)
    v2_1.scalar(3)
    console.log('Scalar: ', v2_1, v2_2)
    v2_1.add(v2_2)
    console.log('Add: ', v2_1, v2_2)
    console.log('Length V1: ', v2_1.norm())
    console.log("Dot: ", v2_1.dot(v2_2))

    console.log("Matrix2")
    const matrix2_1 = new Matrix2([1, 8, 6, 4])
    const matrix2_2 = new Matrix2([2, 5, 4, 9])
    console.log("Start:", matrix2_1.items, matrix2_2.items)
    matrix2_1.add(matrix2_2)
    console.log("Add: ", matrix2_1.items)
    matrix2_1.mul(matrix2_2)
    console.log("Mul: ", matrix2_1.items)
    matrix2_1.sub(matrix2_2)
    console.log('Sub: ', matrix2_1)

    const v3_1 = new Vector3(1, 8, -2)
    const v3_2 = new Vector3(0.8, 5, 1.3)

    console.log("Vector3")
    console.log('Start: ', v3_1, v3_2)
    v3_1.sub(v3_2)
    console.log('Sub: ', v3_1, v3_2)
    v3_1.scalar(2)
    console.log('Scalar: ', v3_1, v3_2)
    v3_1.add(v3_2)
    console.log('Add: ', v3_1, v3_2)
    console.log('Length V1: ', v3_1.norm())
    console.log("Dot: ", v3_1.dot(v3_2))

    console.log("Matrix3")
    const matrix3_1 = new Matrix3([
      3, 1, 2,
      7, 4, 1,
      1, 9, 3
    ])
    const matrix3_2 = new Matrix3([
      8, 4, 6,
      3, 4, 1,
      0, 8, -4
    ])
    console.log("Start:", matrix3_1.items, matrix3_2.items)
    matrix3_1.add(matrix3_2)
    console.log("Add: ", matrix3_1.items)
    matrix3_1.mul(matrix3_2)
    console.log("Mul: ", matrix3_1.items)
    matrix3_1.sub(matrix3_2)
    console.log('Sub: ', matrix3_1)

    const v4_1 = new Vector4(1, -4, 3, -5)
    const v4_2 = new Vector4(-7, 1, 5, -3)

    console.log("Vector4")
    console.log('Start: ', v4_1, v4_2)
    v4_1.sub(v4_2)
    console.log('Sub: ', v4_1, v4_2)
    v4_1.scalar(4)
    console.log('Scalar: ', v4_1, v4_2)
    v4_1.add(v4_2)
    console.log('Add: ', v4_1, v4_2)
    console.log('Length V1: ', v4_1.norm())
    console.log("Dot: ", v4_1.dot(v4_2))

    console.log("Matrix4")
    const matrix4_1 = new Matrix4([
      3, 1, 2, -1,
      7, 4, 1, -7,
      1, 9, 3, 0,
      1, 6, 7, 2,
    ])
    const matrix4_2 = new Matrix4([
      8, 4, 6, -5,
      3, 4, 1, -1,
      0, 8, -4, 4,
      0, 1, -7, 0
    ])
    console.log("Start:", matrix4_1.items, matrix4_2.items)
    matrix4_1.add(matrix4_2)
    console.log("Add: ", matrix4_1.items)
    matrix4_1.mul(matrix4_2)
    console.log("Mul: ", matrix4_1.items)
    matrix4_1.sub(matrix4_2)
    console.log('Sub: ', matrix4_1)

  }
}