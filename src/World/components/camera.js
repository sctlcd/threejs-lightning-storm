import { PerspectiveCamera } from 'three';

/**  Function to create the Camera module
  *  @return camera
  */
function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100, // far clipping plane
  );

//   const camera = new PerspectiveCamera(
//     60, // fov = field of view in degree
//     window.innerWidth / window.innerHeight, // aspect ratio = width / height
//     1, // near clipping plane
//     1000, // far clipping plane 
//   );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
