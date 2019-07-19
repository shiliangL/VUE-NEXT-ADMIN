import React, { Component } from 'react'
import AppTopNavBar from '@/_c/AppTopNavBar';
import AppBanner from '@/_c/AppBanner';
import { Nav00DataSource } from '@/config/cofigData';

export default class AppLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
    };
  }

  render() {
    return (
      <div className="AppLayout">
        <AppTopNavBar
          id="AppTopNavBar"
          key="AppTopNavBar"
          dataSource={Nav00DataSource}
          isMobile={this.state.isMobile} />
        <div className="container">
          <AppBanner />
        </div>
        AppLayout测试
      </div>
    )
  }
}
