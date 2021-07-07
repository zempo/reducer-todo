import React, { useState, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";
import { initialState, reducer } from "../reducers/todoReducer";
import {
  ADD_ITEM,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETED,
} from "../actions/todoActions";

const ToDoList = () => {
  const [todoVal, setTodoVal] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    setTodoVal(e.target.value);
  };

  const toggleDispatch = (todo) => {
    dispatch({ type: TOGGLE_COMPLETED, payload: todo.id });
  };

  const addDispatch = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: todoVal });
    setTodoVal("");
  };

  const clearDispatch = (e) => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <section>
      {state.length ? (
        <div className='todoList'>
          {state.map((todo) => (
            <p
              className='todo'
              key={todo.id}
              onClick={() => {
                toggleDispatch(todo);
              }}
            >
              <span>
                {todo.completed ? (
                  <FontAwesomeIcon icon={faCheckSquare} className='check' />
                ) : (
                  <FontAwesomeIcon icon={faSquare} className='square' />
                )}
              </span>
              &nbsp;
              {todo.todo}
            </p>
          ))}
        </div>
      ) : (
        <h2>Start Adding Todos!</h2>
      )}
      <form className='form-container'>
        <input
          type='text'
          name='newTodo'
          value={todoVal}
          onChange={handleChange}
        />
        <div className='button-container'>
          <button onClick={addDispatch}>ADD</button>
          <button onClick={clearDispatch}>CLEAR</button>
        </div>
      </form>
    </section>
  );
};

export default ToDoList;
