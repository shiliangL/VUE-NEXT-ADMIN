import React, { Component } from 'react'

export default class AppTopNavBar extends Component {
  render() {
    return (
      <nav className="nav-extended AppTopNavBar">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">shiliangL</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Flutter</a></li>
            <li><a href="badges.html">Node</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
