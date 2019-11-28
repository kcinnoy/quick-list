import React from 'react'
import { defaultCipherList } from 'constants';

const TodosContext = React.createContext({
  todos: [
    {id: 1, text: "Eat Breakfast", complet: false},
    {id: 1, text: "Eat Breakfast", complet: false},
    {id: 1, text: "Eat Breakfast", complet: false}
  ]

})

export default TodosContext