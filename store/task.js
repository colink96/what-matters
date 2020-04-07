import axios from 'axios';
import LOCALHOST from '../secrets';

//ACTION TYPES
const GET_ALL_TASKS = 'GET_ALL_TASKS';
const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

//ACTION CREATORS
const getAllTasks = tasks => {
  return {
    tasks,
    type: GET_ALL_TASKS,
  };
};

const addTask = task => {
  return {
    task,
    type: ADD_TASK,
  };
};

const completeTask = task => {
  return {
    task,
    type: COMPLETE_TASK,
  };
};

//THUNKS
export const gotAllTasks = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${LOCALHOST}/api/tasks`);
      dispatch(getAllTasks(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addedTask = task => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`${LOCALHOST}/api/tasks`, task);
      dispatch(addTask(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const completedTask = id => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`${LOCALHOST}/api/tasks/${id}`);
      dispatch(completeTask(data));
    } catch (error) {
      console.log(error);
    }
  };
};

//REDUCER
export default function(state = { tasks: [] }, action) {
  switch (action.type) {
    case GET_ALL_TASKS:
      return { tasks: action.tasks };
    case ADD_TASK:
      return { tasks: [...state.tasks, action.task] };
    case COMPLETE_TASK:
      let tasks = state.tasks.filter(task => {
        return task.id !== action.task.id;
      });
      return { tasks: [...tasks, action.task] };
    default:
      return state;
  }
}
