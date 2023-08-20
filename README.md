# Prerequisites

## Node.js

The project is developed and tested using Node version 16.19.0. It is recommended to use this version or one that's close to it. To check your current Node version, you can run:

### `node -v`

If you need to switch Node versions, consider using nvm (Node Version Manager).

## Installing Dependencies

After ensuring you have the correct version of Node.js, install the required npm packages by running:

### `yarn`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is recommended to use node version of 16.19.0

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Gameplay Explanation

Welcome to my version of the Pacman Simulator :) As per requirements, this game allows you to control a virtual Pacman on a 5x5 grid. Here's a brief walkthrough of the gameplay mechanics:

## 1. Placing Pacman on the Grid

Before you can give any commands to Pacman, you first need to place him on the board. Use the Place Pacman input to set Pacman's starting position and direction:

- X Coordinate (0-4): Determines the horizontal position of Pacman on the grid.
- Y Coordinate (0-4): Determines the vertical position of Pacman on the grid.
- Direction: Sets the direction Pacman is facing. Options include NORTH, SOUTH, EAST, and WEST.

Once you've made your selections, click the Place Pacman button to set him onto the board.

## 2. Commanding Pacman
After placing Pacman on the board, you can give him commands using the provided buttons:

- LEFT: Turn Pacman to the left without moving him from his current spot.
- RIGHT: Turn Pacman to the right without changing his location.
- MOVE: Move Pacman one step forward in the direction he's facing. Note: Pacman won't move if he's at the edge of the board and the command would cause him to fall off.

## 3. Reporting Pacman's Position
To see where Pacman is, click the REPORT button. The game will then display Pacman's current position and the direction he's facing on the grid. This info will appear in a special output area.

# Considerations

During the development of this Pacman Simulator, several architectural and design choices were made to ensure the project is robust and scalable. Here's a breakdown:

- Context and Reducer: Instead of going for traditional state management, the application utilises React's Context and Reducer. This setup makes state management more organised and allows for easier feature expansion in the future.
- Styled Components: To maintain a consistent and clean design, the application uses Styled Components. This approach keeps the styling modular and makes it easier to apply design changes.
- Folder Structure: The project has dedicated folders for types, constants, and enums. This helps in keeping the codebase organised and makes it easier for other developers to understand the project's structure and contribute to it.
- Expandable Mechanics: While the current game mechanics are simple, the architecture is set up in a way that more complex Pacman-based mechanics can be added in the future.
- User Experience: Instead of plain text inputs, dropdowns are used for placing Pacman on the grid. This makes the experience more user-friendly and reduces the chance of errors.
- Testing: Comprehensive tests have been written using Jest to ensure the game mechanics work as expected.

In essence, while the game might seem simple on the surface, the architecture is built to scale. Whether it's adding new features, improving the design, or ensuring robustness through tests, the project has a base set up to handle growth.
