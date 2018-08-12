import * as React from 'react'
import * as Three from 'three'

/**
 * Shows the page background animation.
 */
export class Background extends React.Component {
    ctx: WebGLRenderingContext
    canvas: HTMLCanvasElement

    scene: Three.Scene
    camera: Three.PerspectiveCamera;
    renderer: Three.Renderer

    cube: Three.Mesh;

    render() {
        return <canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
            ref={r => this.ctx = (this.canvas = r).getContext('webgl')}
        />
    }

    componentDidMount() {
        this.setup()
    }

    /**
     * Configures the Three library, create scene components, start and update functions, listeners and callbacks.
     */
    setup() {

        // basic components configuration
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

        // creates the update animation frame
        let updateLoop = () => {
            window.requestAnimationFrame(updateLoop)
            if (!this.renderer || !this.scene || !this.camera) return
            this.update()
            this.renderer.render(this.scene, this.camera)
        }

        // initializes rendering loop
        this.start()
        updateLoop()
    }

    start() {
        this.camera.position.z = 5
        let geometry = new Three.BoxGeometry(1, 1, 1)
        let material = new Three.MeshBasicMaterial({ color: 0x00ff00 })
        this.cube = new Three.Mesh(geometry, material)
        this.scene.add(this.cube)

    }

    update() {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
    }
}
