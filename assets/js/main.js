import * as THREE from 'three';
// import starsBgr from './assert/Rocket.png';
import starsBgr from '../img/Rocket.png';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

/* ============================ */
const textureLoader = new THREE.TextureLoader();

const geometry = new THREE.BoxGeometry(2, 3, 2);
const material = new THREE.MeshBasicMaterial({
  map: textureLoader.load([starsBgr]),
});
const cube = new THREE.Mesh(geometry, material);
cube.rotation.x = 0.5;
scene.add(cube);

const lineGeometry = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(-5, 0, 0));
points.push(new THREE.Vector3(0, 5, 0));
points.push(new THREE.Vector3(5, 0, 0));
points.push(new THREE.Vector3(-5, 0, 0));

const lineMaterial = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(lineMaterial, lineGeometry);
scene.add(line);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.09;

  renderer.render(scene, camera);
}
animate();

/* ------------------------------------------ */
