import { logout, Logout } from '@/app/actions/login'
import {
  addTodo,
  AddTodo,
  fetchTodos,
  FetchTodos,
  markTodo,
  MarkTodo,
  deleteTodo,
  DeleteTodo,
  editTodo,
  EditTodo,
} from '@/app/actions/todo'
import { ListWrapper } from '@/app/components/ListWrapper'
import { RootState } from '@/app/models'
import { Todo } from '@/app/models/Todo'
import words from '@/assets/strings'
import * as React from 'react'
import { connect } from 'react-redux'
import * as key from 'weak-key'
import style from './style.scss'

interface Props {
  title: string
  todos: Todo[]
  token: string
  addTodo: AddTodo
  fetchTodos: FetchTodos
  logout: Logout
  markTodo: MarkTodo
  deleteTodo: DeleteTodo
  editTodo: EditTodo
}

interface State {
  currentText: string
  modalHidden: boolean
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todoState.todos,
  token: state.loginState.token,
})

const mapDispatchToProps = {
  editTodo,
  deleteTodo,
  markTodo,
  addTodo,
  fetchTodos,
  logout,
}

class TodoApp extends React.Component<Props, State> {
  static defaultProps: Pick<Props, 'title'> = {
    title: 'Todo Application',
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      currentText: '',
      modalHidden: true,
    }
  }

  addTodo = () => {
    if (!this.state.currentText) {
      return
    }
    this.props.addTodo(this.state.currentText)
    this.setState({
      currentText: '',
    })
  }

  refreshTodo = (e: any, id: number) => {
    if (!this.state.currentText) {
      return
    }
    this.props.editTodo(this.state.currentText, id)
    this.setState({
      currentText: '',
    })
  }

  handleFetchTodos = () => this.props.fetchTodos()

  handleLogout = () => this.props.logout()

  handleDelete = (e: any, id: number) => {
    this.props.deleteTodo(id)
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({
      currentText: e.target.value,
    })

  handleAddTodoClick = () => this.addTodo()

  handleEditTodoClick = (e: any, id: number) => this.refreshTodo(e, id)

  handleAddKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return
    }
    this.addTodo()
  }

  handleEditKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (e.key !== 'Enter') {
      return
    }
    this.refreshTodo(e, id)
  }

  handleCheckBoxClick = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    // DONE: update the checked state to store
    this.props.markTodo(e.target.checked, id)
  }

  modalOpen = () => this.setState({ modalHidden: false })

  modalClose = () => this.setState({ modalHidden: true })

  modalOutsideClicked = () => {
    this.setState({ modalHidden: true })
  }

  render = () => {
    const tokenHeader = (token: string) => (
      <p>
        {token && (
          <>
            <b>{`${words.todoApp.loginMessage}: `}</b>
            {token}
          </>
        )}
      </p>
    )

    return (
      <div className={style.container}>
        <h1 className={style.header}>{this.props.title}</h1>
        <div>
          {tokenHeader(this.props.token)}
          <button type="button" className={style.fetchButton} onClick={this.handleFetchTodos}>
            {words.todoApp.fetchTodos}
          </button>
          <button type="button" className={style.logoutButton} onClick={this.handleLogout}>
            {words.todoApp.logout}
          </button>
        </div>
        <div>
          <button type="button" onClick={this.modalOpen}>
            add Todo
          </button>
          <div
            role="presentation"
            id="createModal"
            className={style.modal}
            hidden={this.state.modalHidden}
            onClick={this.modalOutsideClicked}
            onKeyPress={() => {}}
          >
            <div className={style.modalContent}>
              <button type="button" className={style.close} onClick={this.modalClose}>
                &times;
              </button>
              <input
                className={style.inputTodo}
                type="text"
                onChange={this.handleInputChange}
                onKeyPress={this.handleAddKeyPress}
                placeholder={words.todoApp.placeholder}
                value={this.state.currentText}
              />
              <button type="button" className={style.addButton} onClick={this.handleAddTodoClick}>
                {words.todoApp.addTodo}
              </button>
            </div>
          </div>
        </div>
        <ListWrapper>
          {this.props.todos.map((todo: Todo) => (
            <li className={style.list} key={key(todo)}>
              <div>
                <input
                  className={style.checkbox}
                  type="checkbox"
                  onChange={e => this.handleCheckBoxClick(e, todo.id)}
                  checked={todo.done}
                />
                <label className={style.todoText}>{todo.id}</label>
                <label className={style.todoText}>{todo.text}</label>
                <button type="button" className={style.deleteButton} onClick={e => this.handleDelete(e, todo.id)}>
                  delete
                </button>
              </div>
              <input
                className={style.inputTodo}
                type="text"
                onChange={this.handleInputChange}
                onKeyPress={e => this.handleEditKeyPress(e, todo.id)}
                placeholder={words.todoApp.editPlaceholder}
                value={this.state.currentText}
              />
              <button type="button" className={style.addButton} onClick={e => this.handleEditTodoClick(e, todo.id)}>
                {words.todoApp.addTodo}
              </button>
            </li>
          ))}
        </ListWrapper>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
