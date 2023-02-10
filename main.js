import './assets/style/style.css';
import * as THREE from 'three';

// Define scene
const scene = new THREE.Scene();

// Define camera: .PerspectiveCamera(field of view in degree, aspect ratio = width / height, near, far) 
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 1;
camera.rotation.x = 1.16;
camera.rotation.y = -0.12;
camera.rotation.z = 0.27;

// Define ambiant light: Illuminate all objects in the scene from all direction
const ambiant = new THREE.AmbientLight( 0x555555 );
// Define directional light: reresent the moon light in the sky
const directionalLight = new THREE.DirectionalLight( 0xffeedd );
// By default, the light will seems to come from above. To change he position light, I must move the whole light
directionalLight.position.set( 0,0,1 );
// Add ambiant light and directional light to scene
scene.add( ambiant,directionalLight );

// const renderer = new THREE.WebGLRenderer();
const renderer = new THREE.WebGLRenderer( { antialias: true } );
// add fog to scene
scene.fog = new THREE.FogExp2( 0x11111f, 0.002 );
renderer.setClearColor( scene.fog.color );
renderer.setSize( window.innerWidth, window.innerHeight );
// add renderer to HTML as a canvas element
document.body.appendChild( renderer.domElement );