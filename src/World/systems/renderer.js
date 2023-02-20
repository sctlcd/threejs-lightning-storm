import { WebGLRenderer } from "three";

// Create the Renderer module
function createRenderer() {
  // Create an instance of the WebGLRenderer
  const renderer = new WebGLRenderer();
  return renderer;
}

export { createRenderer };