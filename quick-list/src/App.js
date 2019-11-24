import React, {useContext, useReducer} from 'react'
import {UserContext} from './index'

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "increment": 
      return {
        count: state.count + 1
      } 
    case "decrement": 
      return {
        count: state.count - 1
      } 
    default: 
      return initialState
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer,initialState)

  const value = useContext(UserContext)

  return (
      // <div> Hello,{value}!</div>
      <div>   
        count: {state.count}
        <button onClick={()=> dispatch({type: "increment"})}>Increment</button>
        <button onClick={()=> dispatch({type: "decrement"})}>Decrement</button>
      
      </div>
  );
}

export default App 
