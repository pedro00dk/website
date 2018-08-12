import * as Three from 'three'
import { AbstractActor } from '../../../three/AbstractActor'

export class Sphere extends AbstractActor {

    mesh: Three.Mesh
    root: Three.Mesh

    start() {
        let geometry = new Three.SphereGeometry(0.5)
        let material = new Three.MeshBasicMaterial({ color: 0x0000ff })


        this.root = new Three.Mesh()
        this.mesh = new Three.Mesh(geometry, material)
        this.mesh.position.set(1, 1, 1)

        this.root.add(this.mesh)

        this.scene.add(this.root)
    }

    update(delta: number) {
        
        this.mesh.rotateOnAxis(new Three.Vector3(0, 1, 1).normalize(), 1 * delta)
        this.root.rotateOnAxis(new Three.Vector3(1, 0, 0).normalize(), 1 * delta)
    }
}