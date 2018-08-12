import * as Three from 'three'
import { AbstractActor } from '../../../three/AbstractActor'

export class Axis extends AbstractActor {

    mesh: Three.Mesh

    start() {
        let xMaterial = new Three.LineBasicMaterial({ color: 0xff0000 })
        let yMaterial = new Three.LineBasicMaterial({ color: 0x00ff00 })
        let zMaterial = new Three.LineBasicMaterial({ color: 0x0000ff })
        // let gridMaterial = new Three.LineBasicMaterial({ color: 0xaaaaaa })
        let xGeometry = new Three.Geometry()
        xGeometry.vertices.push(new Three.Vector3(-2), new Three.Vector3(10))
        let yGeometry = new Three.Geometry()
        yGeometry.vertices.push(new Three.Vector3(0, -2), new Three.Vector3(0, 10))
        let zGeometry = new Three.Geometry()
        zGeometry.vertices.push(new Three.Vector3(0, 0, -2), new Three.Vector3(0, 0, 10))
        // let gridGeometry = new Three.Geometry()
        // gridGeometry.vertices.push(new Three.Vector3(-1), new Three.Vector3(1))

        let xLine = new Three.Line(xGeometry, xMaterial);
        let yLine = new Three.Line(yGeometry, yMaterial);
        let zLine = new Three.Line(zGeometry, zMaterial);

        this.scene.add(xLine, yLine, zLine)
    }
}