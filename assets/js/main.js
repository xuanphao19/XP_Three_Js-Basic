import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

/* ============================ */

const starsBgr = textureLoader.load('./assets/img/Rocket.png');

const geometry = new THREE.BoxGeometry(2, 3, 2);
const material = new THREE.MeshBasicMaterial({
  map: starsBgr,
});
const cube = new THREE.Mesh(geometry, material);
cube.rotation.x = 0.5;
scene.add(cube);

const points = [];
points.push(new THREE.Vector3(-5, 0, 0));
points.push(new THREE.Vector3(0, 5, 0));
points.push(new THREE.Vector3(5, 0, 0));
points.push(new THREE.Vector3(-5, 0, 0));

const lineMaterial = new THREE.BufferGeometry().setFromPoints(points);
const lineGeometry = new THREE.LineBasicMaterial({ color: 0xfafafa });

const line = new THREE.Line(lineMaterial, lineGeometry);
scene.add(line);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.09;

  renderer.render(scene, camera);
}
animate();

/* ------------------------------------------ */
