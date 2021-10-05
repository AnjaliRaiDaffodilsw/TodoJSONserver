import axios from 'axios';

import {
  updateTodoDataSuccess,
  updateTodoDataRequest,
  updateTodoDataFailure
} from '../redux/actions/todoActions';

export function updateData(id,dataObj) {
  console.log(dataObj);
  return dispatch => {
    dispatch(updateTodoDataRequest());
    axios.put(`http://localhost:3000/posts/${id}`,dataObj)
      .then(() => {
        dispatch(updateTodoDataSuccess());
      })
      .catch(error => {
        dispatch(updateTodoDataFailure(error));
      });
  };
}

export default updateData;