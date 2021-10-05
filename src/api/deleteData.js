import axios from 'axios';

import {
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure
} from '../redux/actions/todoActions';

export function deleteData(id) {
  console.log('hii',id);
  return dispatch => {
    dispatch(deleteTodoRequest());
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
      dispatch(deleteTodoSuccess());
    })
      .catch(error => {
        dispatch(deleteTodoFailure(error));
      });
  };
}

export default deleteData;