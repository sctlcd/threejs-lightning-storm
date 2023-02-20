import { World } from '../src/World/World'

function main() {
  // Get a reference to the canvas element
  const container = document.querySelector('#canvas');

  // Create an instance of the World app
  const world = new World(container);

  // Render the scene
  world.render();
}

// Call the main function to start the app
main();