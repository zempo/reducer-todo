import {
  ADD_ITEM,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETED,
} from "../actions/todoActions";
import { v4 as uuidv4 } from "uuid";

export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        { todo: action.payload, completed: false, id: uuidv4() },
      ];
    case TOGGLE_COMPLETED:
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    case CLEAR_COMPLETED:
      return state.filter((t) => t.completed === false);
    default:
      return state;
  }
};
