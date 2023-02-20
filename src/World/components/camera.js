import { PerspectiveCamera } from "three";

/**  Function to create the Camera module
  *  @return camera
  */
function createCamera() {
  const camera = new PerspectiveCamera(
    60, // fov = field of view in degree
    window.innerWidth / window.innerHeight, // aspect ratio = width / height
    1, // near clipping plane
    1000, // far clipping plane 
  );

  // Set camera position
  // camera.position.z = 1;
  camera.position.set(0, 0, 1);
  // Set the rotation angle of th ecamera to look up into the sky
  // camera.rotation.x = 1.16;
  // camera.rotation.y = -0.12;
  // camera.rotation.z = 0.27;
  camera.rotation.set(1.16, -0.12, 0.27);

  return camera;
}

export { createCamera };