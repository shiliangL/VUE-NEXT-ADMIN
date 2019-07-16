import React, { Component } from 'react'
import styleCss from './index.scss';

export default class SideBar extends Component {
  render() {
    return (
      <nav className={styleCss['page-header']}>
        SideBar
        <div className={styleCss.line}> </div>
      </nav>
    )
  }
}
