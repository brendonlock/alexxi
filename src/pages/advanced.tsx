import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import Stats from 'three/examples/jsm/libs/stats.module';
import './styles.css';

export const AdvancedPage = () => {

    const gui = new dat.GUI();

    const loader = new FBXLoader();
    const scene = new THREE.Scene();

    const path = require("./models/tree.fbx");

    loader.load( path, function ( object ) {

        scene.add( object );
    
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    });

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.set(10, 10, 10)

    const ambientLight = new THREE.AmbientLight()
    scene.add(ambientLight)

    const light = new THREE.PointLight()
    light.position.set(0.8, 1.4, 1.0)
    scene.add(light)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 1, 0)

    // const geometry = new THREE.BoxGeometry()
    // const material = new THREE.MeshBasicMaterial({
    //     color: 0x00ff00,
    // })

    // const cube = new THREE.Mesh(geometry, material)
    // scene.add(cube)

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    }

    const stats = Stats()
    document.body.appendChild(stats.dom)

    function animate() {
        requestAnimationFrame(animate)

        // cube.rotation.x += 0.01
        // cube.rotation.y += 0.01

        controls.update()

        render()

        stats.update()
    }

    function render() {
        renderer.render(scene, camera)
    }
    animate()

    return (
    <canvas className="webgl"></canvas>
    )
}