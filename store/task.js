import axios from 'axios';

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
      const { data } = await axios.get('/api/tasks');
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
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
}
