# Todo App: What Matters?

This repo is a project for my application to Matter Product Studio. It is a simple React Native Todo App.

## Features:

- GET all of today's tasks
- POST a single task
- PUT or complete a single task
- DELETE a single task

## Stack:

### Frontend:

- Javascript
- React Native with Expo
- Redux

### Backend:

- Node.js
- Express

### Testing:

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
5. Run `npm start` to start the metro server and the backend server. This will output a QR code for your iOS device to run the project on the Expo Client app. If you are running it on the iOS simulator, go to the URL listed in the console for Expo Devtools in your browser. There you will be able to start the project on the iOS simulator.

# Project Schema:

Because setting up a database was not in the scope of this project, the data is instead stored in `server/db/data.js`. The Task model is structured as follows:

Task:

- id: int (to easily query, complete, and delete single tasks)
- name: string (task title)
- minute: int (min 0, max 59)
- hour: int (in 24 hour time)
- complete: boolean (to indicate a task's completion)

Had I set up a database, I would have utilized an ORM called Sequelize (https://sequelize.org/master/) with PostgreSQL, which allows one to write Javascript to create models and write SQL queries in the backend. If authentication was implemented I would have also included a userId in the Task model, with an associated Users model so that the the data is relationally linked.

# Testing

Run the following to test the backend: `npm run test-backend`. I test for all routes in the task API (GET /api/tasks, POST /api/tasks, PUT /api/tasks/:id, DELETE /api/tasks/:id) Frontend testing was not yet implemented due to time constraints and inexperience with React Native testing.

Had this been a critical app with limited testing, the most crucial feature to test would be to GET all tasks from the API and render them on the frontend. After all, this is a todo app, and the most barebones feature of that app would be to show a user what tasks are listed for the day. Therefore, I would implement one test on the backend to make sure the endpoint is correctly sending the tasks in our API, and one test on the frontend to render all of those tasks.
