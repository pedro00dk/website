import * as Three from 'three'

/**
 * Interface for ThreeManager Actors, Actors are the elements that run actions and manipulate elements in the scene.
 */
export class AbstractActor {

    scene: Three.Scene
    camera: Three.Camera
    renderer: Three.Renderer

    /**
     * Sets the actor with scene basic elements.
     * 
     * @param scene the scene
     * @param camera the camera
     * @param renderer the renderer
     */
    setup(scene: Three.Scene, camera: Three.Camera, renderer: Three.Renderer) {
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
    }

    /**
     * Called once when the ThreeManager starts, usually used to configure elements.
     */
    start() { }

    /**
     * Called after ThreeManager starts and in every ThreeManager update. 
     * 
     * @param delta delta time since last update
     */
    update(delta: number) { }
}