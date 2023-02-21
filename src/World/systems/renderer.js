import { WebGLRenderer } from 'three';

/**  Function to create the Renderer module
  *  @return renderer
  */
function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer };
