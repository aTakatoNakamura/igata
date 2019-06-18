import * as React from 'react'
import style from './style.scss'

interface Props {
  modalHidden: boolean
  modalName: string
  children: React.ReactNode
  modalOutsideClicked: () => void
  modalClose: () => void
}
interface State {}

export class Modal extends React.Component<Props, State> {
  render = () => {
    return (
      <div>
        <div
          role="presentation"
          id="createModal"
          className={style.modal}
          hidden={this.props.modalHidden}
          onClick={this.props.modalOutsideClicked}
          onKeyPress={() => {}}
        />
        <div className={style.modalContent} hidden={this.props.modalHidden}>
          <h1>Add todo</h1>
          <button type="button" className={style.close} onClick={this.props.modalClose}>
            &times;
          </button>
          {this.props.children}
        </div>
      </div>
    )
  }
}
