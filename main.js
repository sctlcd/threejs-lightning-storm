import './assets/style/style.css';
import * as THREE from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls';

// Define scene
const scene = new THREE.Scene();
// Define camera: .PerspectiveCamera(field of view in degree, aspect ratio = width / height, near, far) 
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
// Define lightning flash: Setup a pointLight with blue color
const flash = new THREE.PointLight(0x062d89, 30, 500 ,1.7);
const renderer = new THREE.WebGLRenderer( { antialias: true } );
const cloudParticles1 = [];
const cloudParticles2 = [];
const cloudParticles3 = [];

// // Define orbitControls
// const controls = new OrbitControls(camera, renderer.domElement);


// make canvas responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; // update aspect ratio
  camera.updateProjectionMatrix(); // apply changes

  renderer.setSize(window.innerWidth, window.innerHeight); // update size
  renderer.setPixelRatio(window.devicePixelRatio); // use to render at the native screen resolution
  // renderer.render(scene, camera); // Not needed since it is called in rendering()
});

function init() {
  // Set camera position
  camera.position.z = 1;
  // Set the rotation angle of th ecamera to look up into the sky
  camera.rotation.x = 1.16;
  camera.rotation.y = -0.12;
  camera.rotation.z = 0.27;

  // Define ambiant light: Illuminate all objects in the scene from all direction
  const ambiant = new THREE.AmbientLight( 0x555555 );
  // Define directional light: reresent the moon light in the sky
  const directionalLight = new THREE.DirectionalLight( 0xffeedd );
  // By default, the light will seems to come from above. To change he position light, I must move the whole light
  directionalLight.position.set( 0,0,1 );
  // Add ambiant light and directional light into scene
  scene.add( ambiant,directionalLight );

  // Set lightning flash position behind the cloud
  flash.position.set(200,300,100);
  // Add lightning flash to the scene
  scene.add(flash);
  
  // Add fog into scene
  scene.fog = new THREE.FogExp2( 0x11111f, 0.002 );
  renderer.setClearColor( scene.fog.color );
  renderer.setSize( window.innerWidth, window.innerHeight ); 

  // Add renderer into HTML as a canvas element
  document.body.appendChild( renderer.domElement );

  // Define Texture loader
  const loader = new THREE.TextureLoader();
  // Set Texture loader
  const texture1 = loader.load("./assets/textures/vecteezy_rain-clouds-and-black-sky-textured-background_10123744_360-min.jpg");
  const texture2 = loader.load("./assets/textures/vecteezy_rain-clouds-and-black-sky-textured-background_10121810_444-min.jpg");
  const texture3 = loader.load("./assets/textures/vecteezy_rain-clouds-and-black-sky-textured-background_10121519_408-min.jpg");

  // Cloud 1
  // Define a geometry - 2000 unit plain square
  const cloudGeometry1 = new THREE.PlaneBufferGeometry(2000,2000);
  // Define a material and map it to the texture 1 
  const cloudMaterial1 = new THREE.MeshLambertMaterial({
    map: texture1,
    transparent: true
  });

  // Loop to randomly add each cloud to the scene
  for(let p=0; p<25; p++) {
    const cloud1 = new THREE.Mesh(cloudGeometry1, cloudMaterial1);
    cloud1.position.set(
      Math.random()*800 -400,
      500,
      Math.random()*500 - 450
    );
    // Set the cloud rotation angle to face the camera
    cloud1.rotation.x = 1.16;
    cloud1.rotation.y = -0.12;
    // Add some random around the z axis
    cloud1.rotation.z = Math.random()*360;
    cloud1.material.opacity = 0.8;

    // Store the reference to each cloud in an array
    cloudParticles1.push(cloud1);
    
    // Add Cloud1 into scene
    scene.add(cloud1);
  }

  // // Cloud 2
  // const cloudGeometry2 = new THREE.PlaneBufferGeometry(2000,2000);
  // const cloudMaterial2 = new THREE.MeshLambertMaterial({
  //   map: texture2,
  //   transparent: true
  // });

  // for(let p=0; p<25; p++) {
  //   const cloud2 = new THREE.Mesh(cloudGeometry2, cloudMaterial2);
  //   cloud2.position.set(
  //     Math.random()*800 -400,
  //     500,
  //     Math.random()*500 - 450
  //   );
  //   cloud2.rotation.x = 1.16;
  //   cloud2.rotation.y = -0.12;
  //   cloud2.rotation.z = Math.random()*360;
  //   cloud2.material.opacity = 0.6;

  //   cloudParticles2.push(cloud2);
    
  //   scene.add(cloud2);
  // }

  // Cloud 3
  const cloudGeometry3 = new THREE.PlaneBufferGeometry(2000,2000);
  const cloudMaterial3 = new THREE.MeshLambertMaterial({
    map: texture3,
    transparent: true
  });

  for(let p=0; p<25; p++) {
    const cloud3 = new THREE.Mesh(cloudGeometry3, cloudMaterial3);
    cloud3.position.set(
      Math.random()*800 -400,
      500,
      Math.random()*500 - 450
    );
    cloud3.rotation.x = 1.16;
    cloud3.rotation.y = -0.12;
    cloud3.rotation.z = Math.random()*360;
    cloud3.material.opacity = 0.5;

    cloudParticles3.push(cloud3);
    
    scene.add(cloud3);
  }

  rendering();
};

function rendering() {
  // In the array of clouds rotate the cloud one by one
  cloudParticles1.forEach(p => {
    p.rotation.z -=0.0004;
  });

  cloudParticles2.forEach(p => {
    p.rotation.z -=0.0001;
  });

  cloudParticles3.forEach(p => {
    p.rotation.z -=0.0002;
  });

  // Random the flash position and light intensity 
  if(Math.random() > 0.93 || flash.power > 100) {
    if(flash.power < 100) 
      flash.position.set(
        Math.random()*400,
        300 + Math.random() *200,
        100
      );
    flash.power = 50 + Math.random() * 500;
  }
  // renderer.render(scene, camera);

  // rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(rendering);

  renderer.render(scene, camera);
}

init();