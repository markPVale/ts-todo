import * as React from 'react'
import {TodoInterface, TodoFormInterface} from '../interface'

const generateKey = () => {
  return `${new Date().getTime()}`
}

const ToDoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [values, setValues] = React.useState('')

  function handleInputChange(event:
    React.ChangeEvent<HTMLInputElement>) {
      setValues(event.target.value)
    }
    function handleInputEnter(event:
      React.KeyboardEvent) {
        //check for enter key
        if (event.key === 'Enter') {
          //prepare new todo object
          const newTodo: TodoInterface = {
            id: generateKey(),
            name: values,
            isCompleted: false
          }
          //Create new todo item
          props.handleTodoCreate(newTodo)
          //Reset the input field
          if (inputRef && inputRef.current) {
            inputRef.current.value = ''
          }
        }
      }
      return (
        <div className='todo-form'>
          <input
            ref={inputRef}
            type='text'
            placeholder='Enter New Todo'
            onChange={event => handleInputChange(event)}
            onKeyPress={event => handleInputEnter(event)}
          />
        </div>
      )
}

export default ToDoForm