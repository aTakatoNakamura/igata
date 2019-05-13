import words from '@/assets/strings'
import * as React from 'react'

namespace HookSample {
  export interface Props {}
  export interface State {}
}

export default class HookSample extends React.Component<HookSample.Props, HookSample.State> {
  handleBackClick = () => {
    alert(words.footer.back)
  }

  handleForwardClick = () => {
    alert(words.footer.forward)
  }

  render = () => (
    <>
      <button onClick={this.handleBackClick}>{words.footer.back}</button>
      <button onClick={this.handleForwardClick}>{words.footer.forward}</button>
    </>
  )
}
