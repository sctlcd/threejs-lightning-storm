import { Scene, Color } from "three";

/**  Function to create the Scene module
  *  @return scene
  */
function createScene() {
  // Create an instance of the Scene
  const scene = new Scene();
  scene.background = new Color('red');
  return scene;
}

export { createScene };