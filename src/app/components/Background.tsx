import * as React from 'react'

import { ThreeManager } from '../../three/ThreeManager'
import { Cube } from './background/Cube';
import { Sphere } from './background/Sphere';
import { Axis } from './background/Axis';
import { Camera } from './background/Camera';

/**
 * Shows the page background animation.
 */
export class Background extends React.Component {
    private threeManager: ThreeManager

    render() {
        return <canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
            ref={r => (this.threeManager = new ThreeManager(r))}
        />
    }

    componentDidMount() {
        let actors = [
            new Cube(),
            new Sphere(),
            new Axis(),
            new Camera(true)
        ]
        this.threeManager.start(actors)
    }
}
