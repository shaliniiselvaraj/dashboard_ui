import { FETCH_DATA_SUCCESS } from '../actions/dataActions';

const initialState = {
  data: []
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
