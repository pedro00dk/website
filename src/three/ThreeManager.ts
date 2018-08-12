import * as Three from 'three'

import { AbstractActor } from './AbstractActor'

/**
 * Configures the Three library, create scene components, start and update functions, listeners and callbacks.
 */
export class ThreeManager {
    private canvas: HTMLCanvasElement
    private context: WebGLRenderingContext

    private scene: Three.Scene
    private renderer: Three.Renderer
    private camera: Three.PerspectiveCamera

    /**
     * Initializes the Manager with the target canvas.
     * 
     * @param canvas renderer target canvas
     */
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext('webgl')

        this.setup()
    }

    /**
     * Configures the basic Three components and a resize listener
     */
    private setup() {
        this.scene = new Three.Scene()
        this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
        this.renderer = new Three.WebGLRenderer({ canvas: this.canvas })
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        // updates renderer and camera on page resize
        window.addEventListener(
            'resize',
            e => {
                this.renderer.setSize(window.innerWidth, window.innerHeight)
                this.camera.aspect = window.innerWidth / window.innerHeight
                this.camera.updateProjectionMatrix()
            }
        )
    }

    /**
     * Starts to render the in the received canvas, initialize all actors and start them.
     * 
     * @param actors list of Actors 
     */
    start<T extends AbstractActor>(actors: T[]) {

        console.log('hello')
        actors.forEach(a => a.setup(this.scene, this.camera, this.renderer))
        let clock = new Three.Clock()

        // creates the update animation frame
        let updateLoop = () => {
            window.requestAnimationFrame(updateLoop)
            if (!this.renderer || !this.scene || !this.camera) return
            let delta = clock.getDelta()
            actors.forEach(a => a.update(delta))
            this.renderer.render(this.scene, this.camera)
        }

        // initializes rendering loop
        actors.forEach(a => a.start())
        updateLoop()
    }
}