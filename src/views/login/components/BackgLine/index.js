import React, { Component } from 'react'
import './index.scss'

export default class BackgLine extends Component {

  render() {
    const lines = new Array(10).map(item=> item = new Date().getTime()+Math.random().toString(36).substr(2) )
    return (
      <ul className="animation">
        {lines.map(item => <li> {item} </li>  )}
      </ul>
    )
  }
}
