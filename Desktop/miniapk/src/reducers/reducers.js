// src/reducers.js
import { SET_SPACE } from "../actions/actions";

const initialState = {
  spaces: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPACE:
      return {
        ...state,
        spaces: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
