import axios from 'axios';

import {
  addTodoDataRequest,
  addTodoDataSuccess,
  addTodoDataFailure
} from '../redux/actions/todoActions';

export function addData(dataObj) {
  return dispatch => {
    dispatch(addTodoDataRequest());
    axios.post('http://localhost:3000/posts/', dataObj)
      .then(() => {
        dispatch(addTodoDataSuccess());
      })
      .catch(error => {
        dispatch(addTodoDataFailure(error));
      });
  };
}

export default addData;