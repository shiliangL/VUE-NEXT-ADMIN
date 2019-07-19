import React, { Component } from 'react'
import AppTopNavBar from '@/_c/AppTopNavBar';
import AppBanner from '@/_c/AppBanner';

export default class AppLayout extends Component {
  render() {
    return (
      <div className="AppLayout">
        <AppTopNavBar />
        <div className="container">
          <AppBanner />
        </div>
        AppLayout
      </div>
    )
  }
}
