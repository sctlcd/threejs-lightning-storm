import { createCamera } from './components/camera';
import { createCloud } from './components/cloud.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let renderer;
let scene;

class World {
  // Create an instance of the World app
  constructor(container) {
  camera = createCamera();
  scene = createScene();
  renderer = createRenderer();
  container.append(renderer.domElement);

  // const cloud = createCloud();

  // scene.add(cloud);

  const resizer = new Resizer(container, camera, renderer);
}
  // Render the scene
  render() {
    renderer.render(scene, camera);
  }
}

export { World };