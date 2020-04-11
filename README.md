# Todo App: What Matters?

This repo is a project for my application to Matter Product Studio. It is a simple React Native Todo App.

## Features

- GET all of today's tasks
- POST a single task
- PUT or complete a single task
- DELETE a single task

## Stack

- Javascript

### Frontend

- React Native with Expo
- Redux

### Backend

- Node.js
- Express

### Testing

- Mocha/Chai
- Jest (incomplete)

## Complete:

### Part 1. UI/Frontend

- Ability to add a task.
- Ability to complete a task.
- Ability to delete a task. (Swipe left to delete)
- App is built using React Native.
- On launch, app loads all 3 tasks from API.
- The frontend app has utilizes Redux to manage state.

### Part 2. API/Data

- Simple API that when called returns a JSON object with 3 tasks (GET /api/tasks).
- POST/PUT/DELETE routes also added.

### Part 3. Testing

- Backend testing for all routes (GET/POST/PUT/DELETE).

## Incomplete:

### Part 3. Testing

- Frontend testing

# Project Setup:

1. This project was built using React Native with Expo. Please install Expo CLI by running the command: `npm install expo-cli --global`. 
2. If you are running this on your own iOS device, please install the Expo Client app from the App Store: https://apps.apple.com/us/app/expo-client/id982107779 . If you do not have an iOS device, or prefer to use the iOS simulator, please follow the instructions in the Expo documentation to install the iOS simulator: https://docs.expo.io/versions/latest/workflow/ios-simulator/
3. In the project directory run: `npm install` to install any project dependencies.
4. Create a `secrets.js` file in the top level directory with the following line:
`module.exports = 'http://[YOUR LOCAL IP ADDRESS HERE]:8080';`
5. Run `npm start` to start the metro server, and the backend. This will output a QR code for your iOS device to run the project. If you are running it on the iOS simulator, go to the URL listed for Expo Devtools where you will be able to start the simulator.
