import axios from 'axios';
import LOCALHOST from '../secrets';

//ACTION TYPES
const GET_ALL_TASKS = 'GET_ALL_TASKS';

//ACTION CREATORS
const getAllTasks = tasks => {
  return {
    tasks,
    type: GET_ALL_TASKS,
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

//REDUCER
export default function(state = { tasks: [] }, action) {
  switch (action.type) {
    case GET_ALL_TASKS:
      return { tasks: action.tasks };
    default:
      return state;
  }
}
