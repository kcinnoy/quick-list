import React, {useState} from 'react'

export default function TodoForm() {
  const [todo, setTodo]= useState("")

  return (
    <form className=" flex justify-center p-5">

      <input type="text" className="border-black border-solid border-2"/>
      
    </form>
  )
}
