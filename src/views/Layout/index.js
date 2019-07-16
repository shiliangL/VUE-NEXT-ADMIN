import React, { Component } from 'react'
import AppNavBar from '@/_c/AppNavBar';
import AppBanner from '@/_c/AppBanner';
import SideBar from '@/_c/SideBar';

export default class AppLayout extends Component {
  render() {
    return (
      <div className="AppLayout">
        <AppBanner/>
        <AppNavBar/>
        <SideBar/>
        AppLayout
      </div>
    )
  }
}
