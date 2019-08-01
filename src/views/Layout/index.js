import React, { Component } from 'react'
import AppTopNavBar from '@/_c/AppTopNavBar';
import AppBanner from '@/_c/AppBanner';
import Feature7 from '@/views/FutureItem/Feature7';
import { Nav00DataSource, Content50DataSource } from '@/config/cofigData';
import { enquireScreen } from 'enquire-js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
export default class AppLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <div className="AppLayout">
        <AppTopNavBar
          id="AppTopNavBar"
          key="AppTopNavBar"
          dataSource={Nav00DataSource}
          isMobile={this.state.isMobile} />
        <div className="">
          <AppBanner />
        </div>
        <Feature7
          id="Feature7"
          key="Feature7"
          dataSource={Content50DataSource}
          isMobile={this.state.isMobile}
        />
        AppLayout测试
      </div>
    )
  }
}
