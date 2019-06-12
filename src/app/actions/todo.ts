import { Todo } from '@/app/models/Todo'

// action types
export const Type = {
  ADD_TODO: 'TODOS/ADD_TODO' as 'TODOS/ADD_TODO',
  FETCH_TODOS: 'TODOS/FETCH_TODOS' as 'TODOS/FETCH_TODOS',
  FETCH_TODOS_SUCCESS: 'TODOS/FETCH_TODOS_SUCCESS' as 'TODOS/FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE: 'TODOS/FETCH_TODOS_FAILURE' as 'TODOS/FETCH_TODOS_FAILURE',
  MARK_TODO: 'TODOS/MARK_TODO' as 'TODOS/MARK_TODO',
  DELETE_TODO: 'TODOS/DELETE_TODO' as 'TODOS/DELETE_TODO',
  EDIT_TODO: 'TODOS/EDIT_TODO' as 'TODOS/EDIT_TODO',
}

// action creator interfaces
export type AddTodo = (text: string) => void
export type FetchTodos = () => void
export type fetchTodosSuccess = (todos: Todo[]) => void
export type fetchTodosFailure = (errorCode: string) => void
export type MarkTodo = (bool: boolean, id: number) => void
export type DeleteTodo = (id: number) => void
export type EditTodo = (text: string, id: number) => void

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

export const markTodo = (done: boolean, id: number) => ({
  type: Type.MARK_TODO,
  payload: { done, id },
})

export const deleteTodo = (id: number) => ({
  type: Type.DELETE_TODO,
  payload: { id },
})

export const editTodo = (text: string, id: number) => ({
  type: Type.EDIT_TODO,
  payload: { id, text },
})

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof fetchTodos>
  | ReturnType<typeof fetchTodosSuccess>
  | ReturnType<typeof fetchTodosFailure>
  | ReturnType<typeof markTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof editTodo>
