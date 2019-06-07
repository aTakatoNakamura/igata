import { Todo } from '@/app/models/Todo'

// action types
export const Type = {
  ADD_TODO: 'TODOS/ADD_TODO' as 'TODOS/ADD_TODO',
  FETCH_TODOS: 'TODOS/FETCH_TODOS' as 'TODOS/FETCH_TODOS',
  FETCH_TODOS_SUCCESS: 'TODOS/FETCH_TODOS_SUCCESS' as 'TODOS/FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE: 'TODOS/FETCH_TODOS_FAILURE' as 'TODOS/FETCH_TODOS_FAILURE',
  RENEW_TODO: 'TODOS/RENEW_TODO' as 'TODOS/RENEW_TODO',
}

// action creator interfaces
export type AddTodo = (text: string) => void
export type FetchTodos = () => void
export type fetchTodosSuccess = (todos: Todo[]) => void
export type fetchTodosFailure = (errorCode: string) => void
export type RenewTodo = (bool: boolean) => void

// action creators
export const addTodo = (text: string) => ({
  type: Type.ADD_TODO,
  payload: { text },
})

export const fetchTodos = () => ({
  type: Type.FETCH_TODOS,
})

export const fetchTodosSuccess = (todos: Todo[]) => ({
  type: Type.FETCH_TODOS_SUCCESS,
  payload: { todos },
})

export const fetchTodosFailure = (errorText: string) => ({
  type: Type.FETCH_TODOS_FAILURE,
  payload: { errorText },
})

export const renewTodo = (bool: boolean) => ({
  type: Type.RENEW_TODO,
  payload: { bool },
})

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof fetchTodos>
  | ReturnType<typeof fetchTodosSuccess>
  | ReturnType<typeof fetchTodosFailure>
  | ReturnType<typeof renewTodo>
