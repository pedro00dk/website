import * as Three from 'three'
import { AbstractActor } from '../../../three/AbstractActor'

export class Cube extends AbstractActor {

    mesh: Three.Mesh

    start() {
        this.mesh = new Three.Mesh(new Three.BoxGeometry(1, 1, 1), new Three.MeshBasicMaterial({ color: 0x00ff00 }))
        this.scene.add(this.mesh)
    }

    update(delta: number) {
        this.mesh.rotation.x += 1 * delta
        this.mesh.rotation.y += 1 * delta
    }
}