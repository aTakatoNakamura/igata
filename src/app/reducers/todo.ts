import { TodoAction, Type } from '@/app/actions/todo'
import { TodoState } from '@/app/models/Todo'
import { Reducer } from 'redux'

const defaultState: TodoState = {
  todos: [
    {
      text: 'Cook and eat my graceful fried rice',
      done: false,
      id: 1,
    },
    {
      text: 'Sleep for 15 hours',
      done: true,
      id: 2,
    },
  ],
}

export const todoReducer: Reducer<TodoState, TodoAction> = (state: TodoState = defaultState, action: TodoAction): TodoState => {
  switch (action.type) {
    case Type.ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          {
            done: false,
            text: action.payload.text,
            id: state.todos[state.todos.length - 1].id + 1,
          },
        ],
      }
    }
    case Type.FETCH_TODOS: {
      console.log(state)
      return state
    }
    case Type.FETCH_TODOS_SUCCESS: {
      console.log(action.payload.todos)
      return { todos: action.payload.todos }
    }
    case Type.FETCH_TODOS_FAILURE: {
      return state
    }
    case Type.MARK_TODO: {
      const todoList = state.todos.slice()
      const index = todoList.findIndex(item => item.id === action.payload.id)
      todoList[index] = { ...todoList[index], done: action.payload.done }
      const stateCopy = { ...state, todos: todoList }

      return stateCopy
    }
    case Type.DELETE_TODO: {
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id) }
    }
    case Type.EDIT_TODO: {
      const todoList = state.todos.slice()
      const index = todoList.findIndex(item => item.id === action.payload.id)
      console.log(todoList)
      todoList[index] = { ...todoList[index], text: action.payload.text }
      return { ...state, todos: todoList }
    }
    default:
      return state
  }
}
