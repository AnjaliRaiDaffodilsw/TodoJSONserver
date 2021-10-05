import {
  FETCH_DATAWITHID_REQUEST,
  FETCH_DATAWITHID_SUCCESS,
  FETCH_DATAWITHID_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actionTypes/todoActionTypes';

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const fetchDataSuccess = (item) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      item,
    }
  };
};

export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: {
      error
    }
  };
};

export const addTodoDataRequest = () => {
  return {
    type: ADD_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const addTodoDataSuccess = (item) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: {
      isLoading: false,
    }
  };
};

export const addTodoDataFailure = error => {
  return {
    type: ADD_TODO_FAILURE,
    payload: {
      error
    }
  };
};

export const deleteTodoRequest = () => {
  return {
    type: DELETE_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const deleteTodoSuccess = () => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: {
      isLoading: false,
    }
  };
};

export const deleteTodoFailure = error => {
  return {
    type: DELETE_TODO_FAILURE,
    payload: {
      error
    }
  };
};

export const updateTodoDataRequest = () => {
  return {
    type: UPDATE_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const updateTodoDataSuccess = () => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: {
      isLoading: false,
    }
  };
};

export const updateTodoDataFailure = error => {
  return {
    type: UPDATE_TODO_FAILURE,
    payload: {
      error
    }
  };
};

export const fetchDataWithIdRequest = () => {
  return {
    type: FETCH_DATAWITHID_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const fetchDataWithIdSuccess = (item) => {
  return {
    type: FETCH_DATAWITHID_SUCCESS,
    payload: {
      item,
    }
  };
};

export const fetchDataWithIdFailure = error => {
  return {
    type: FETCH_DATAWITHID_FAILURE,
    payload: {
      error
    }
  };
};
