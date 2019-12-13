import React from 'react'

const TodosContext = React.createContext({
  todos: [
    // {id: 1, text: "Create Delivery plan", complete: false},
    // {id: 2, text: "Write Blog post", complete: false},
    // {id: 3, text: "Draft email template", complete: true}
  ],
  currentTodo: {

  }

});

export default TodosContext