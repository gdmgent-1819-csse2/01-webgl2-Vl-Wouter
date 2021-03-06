import Canvas from './library/Canvas.js'
import Tests from './Tests/Tests.js'

/** Class for the application. */
export default class Application {
    /**
     * Create a new application.
     */
    constructor() {
        const tests = false
        if (tests) {
            new Tests()
        }
        console.info('WebGL2 Demo')

        this.shaderSources = {
            fragment: null,
            vertex: null,
        }
        this.preloader()
    }

		/**
		 * Load all necessary assets to make the application run
		 */
    async preloader() {
        console.info('Preloading source code for shaders')
        await fetch('./assets/glsl/vertex-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.vertex = source)
            .catch(error => console.error(error.message))
        await fetch('./assets/glsl/fragment-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.fragment = source)
            .catch(error => console.error(error.message))
        this.run()
    }

		/**
		 * Run the application in a defined area
		 */
    run() {
        const width = 600
        const height = 600

        new Canvas(width, height, this.shaderSources)
    }
}