import { WebGLRenderer } from "three";

/**  Function to create the Renderer module
  *  @return renderer
  */
function createRenderer() {
  // Create an instance of the WebGLRenderer
  const renderer = new WebGLRenderer();
  return renderer;
}

export { createRenderer };