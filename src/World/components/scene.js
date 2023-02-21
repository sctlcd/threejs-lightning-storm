// import { Scene, Color, TextureLoader } from "three";
import { Color, Scene } from 'three';

/**  Function to create the Scene module
  *  @return scene
  */
function createScene() {
  const scene = new Scene();

  scene.background = new Color('black');

  return scene;
}

export { createScene };
