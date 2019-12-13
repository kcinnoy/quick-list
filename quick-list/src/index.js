import React, {useContext, useReducer, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import TodosContext from './context'
import TodosReducer from './reducer'
import * as serviceWorker from './serviceWorker';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import axios from 'axios';

const useAPI = endpoint => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(endpoint)
    setData(response.data)

  }

  return data;
}

export const App = () => {
  const initialState = useContext(TodosContext);
  const [state,dispatch] = useReducer(TodosReducer, initialState);
  const savedTodos = useAPI("https://hooks-api-eosin-one.now.sh/todos")

  useEffect(() => {
    dispatch({
      type: "GET_TODOS",
      payload: savedTodos
    })
  }, [savedTodos])

  return(
    <TodosContext.Provider value= {{state, dispatch}}>
      <TodoForm/>
      <TodoList/>
    </TodosContext.Provider>
  )
}


ReactDOM.render(
    <App />
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
