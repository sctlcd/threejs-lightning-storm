import { World } from './World/World.js';

/**  Function to create the Main module
  *  @return -
  */
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

main();
