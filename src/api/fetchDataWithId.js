import axios from 'axios';

import {
  fetchDataWithIdRequest,
  fetchDataWithIdSuccess,
  fetchDataWithIdFailure
} from '../redux/actions/todoActions';

export function fetchDataWithId(id) {
  console.log(id)
  return dispatch => {
    dispatch(fetchDataWithIdRequest());
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(() => {
        dispatch(fetchDataWithIdSuccess());
      })
      .catch(error => {
        dispatch(fetchDataWithIdFailure(error));
      });
  };
}

export default fetchDataWithId;