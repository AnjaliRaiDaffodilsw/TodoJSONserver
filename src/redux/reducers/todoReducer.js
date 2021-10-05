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
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actionTypes/todoActionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const todoList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.item,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      }
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    case DELETE_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      }
    }
    case DELETE_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    case UPDATE_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      }
    }
    case UPDATE_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    case FETCH_DATAWITHID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATAWITHID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case FETCH_DATAWITHID_FAILURE: {
      return {
        ...state,
        loading: true,
      }
    }
    default: return state;
  }
}