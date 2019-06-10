export interface Todo {
  id: number
  done: boolean
  text: string
}

export interface TodoState {
  todos: Todo[]
}
