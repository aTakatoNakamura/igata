import { TodoAction, Type } from '@/app/actions/todo'
import { TodoState } from '@/app/models/Todo'
import { Reducer } from 'redux'

const defaultState: TodoState = {
  todos: [
    {
      text: 'Cook and eat my graceful fried rice',
      done: false,
    },
    {
      text: 'Sleep for 15 hours',
      done: true,
    },
  ],
}

export const todoReducer: Reducer<TodoState, TodoAction> = (state: TodoState = defaultState, action: TodoAction): TodoState => {
  switch (action.type) {
    case Type.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            done: false,
            text: action.payload.text,
          },
        ],
      }

    case Type.FETCH_TODOS:
      return state

    case Type.FETCH_TODOS_SUCCESS:
      return { todos: action.payload.todos }

    case Type.FETCH_TODOS_FAILURE:
      return state

    case Type.RENEW_TODO:
      console.log(state.todos)
      console.log(action.payload.bool)
      // state.todos[0].done = action.payload.bool // ここで怒られてる
      return state
    // return {
    //   todos: [
    //     ...state.todos,
    //     {
    //       done: action.payload.bool,
    //       text: 'bug'
    //     },
    //   ],
    // }

    default:
      return state
  }
}
