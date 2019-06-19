import React, { FC } from 'react'
import style from './style.scss'

interface Props {
  modalHidden: boolean
  modalName: string
  children: React.ReactNode
  OutsideClicked: () => void
  Close: () => void
}

export const Modal: FC<Props> = (props: Props) => {
  return (
    <div>
      <div
        role="presentation"
        className={style.modal}
        hidden={props.modalHidden}
        onClick={props.OutsideClicked}
        onKeyPress={() => {}}
      />
      <div className={style.modalContent} hidden={props.modalHidden}>
        <h1>Add todo</h1>
        <button type="button" className={style.close} onClick={props.Close}>
          &times;
        </button>
        {props.children}
      </div>
    </div>
  )
}
