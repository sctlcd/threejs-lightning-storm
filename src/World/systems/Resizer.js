/**  Class to make canvas responsive
  *  @return -
  */
class Resizer {
  constructor(container, camera, renderer) {
    // Set the camera's aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;
    //     camera.aspect = window.innerWidth / window.innerHeight;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);
    // renderer.setSize(window.innerWidth, window.innerHeight);

    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export { Resizer };
