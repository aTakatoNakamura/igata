import React, { FC } from 'react'
import style from './style.scss'

interface Props {
  hidden: boolean
  name: string
  children: React.ReactNode
  outsideClicked: (e: React.MouseEvent<HTMLDivElement>) => void
  close: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Modal: FC<Props> = (props: Props) => {
  return (
    <div>
      <div
        role="presentation"
        className={style.modal}
        hidden={props.hidden}
        onClick={props.outsideClicked}
        onKeyPress={() => {}}
      />
      <div className={style.modalContent} hidden={props.hidden}>
        <h1>{props.name}</h1>
        <button type="button" className={style.close} onClick={props.close}>
          &times;
        </button>
        {props.children}
      </div>
    </div>
  )
}
