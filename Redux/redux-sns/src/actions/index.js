import * as API from '../api';

const getUsersThunk = () => async (dispatch) => {
  dispatch({ type: 'GET_USERS' });
  try {
    const users = await API.getUsers();
    console.log("action's users: ", users);
    dispatch({ type: 'GET_USERS_SUCCESS', payload: users.data });
  } catch (error) {
    dispatch({ type: 'GET_USERS_FAILURE', payload: error });
  }
};

export default getUsersThunk;
