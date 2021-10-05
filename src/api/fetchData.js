import axios from 'axios';

import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure
} from '../redux/actions/todoActions';

export function fetchData() {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios.get('http://localhost:3000/posts')
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
}

export default fetchData;