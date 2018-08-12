import * as Three from 'three'

import { AbstractActor } from '../../../three/AbstractActor'

export class Camera extends AbstractActor {

    constructor(private scrollRotate?: boolean) {
        super()
    }

    start() {
        this.camera.position.set(0, 3, 10)

        document.onmousewheel = e => {
            let wheelDelta = e.wheelDeltaY
            let p = this.camera.position
            this.camera.position.set(
                p.x * Math.cos(wheelDelta) - p.z * Math.sin(wheelDelta),
                p.y,
                p.z * Math.cos(wheelDelta) + p.x * Math.sin(wheelDelta)
            )
            this.camera.lookAt(0, 0, 0)
        }
    }

    update(delta) {
        if (this.scrollRotate) return

        let p = this.camera.position
        this.camera.position.set(
            p.x * Math.cos(delta) - p.z * Math.sin(delta),
            p.y,
            p.z * Math.cos(delta) + p.x * Math.sin(delta)
        )
        this.camera.lookAt(0, 0, 0)
    }
}