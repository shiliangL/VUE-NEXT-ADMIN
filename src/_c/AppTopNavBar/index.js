import React, { Component } from 'react'
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
const Item = Menu.Item;

class AppTopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
    };
    this.menu = React.createRef();
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? this.menu.current.dom.scrollHeight : 0,
    });
  };

  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { menuHeight, phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = Object.keys(navData).map((key, i) => (
      <Item key={i.toString()} {...navData[key]}>
        <a
          {...navData[key].a}
          href={navData[key].a.href}
          target={navData[key].a.target}
        >
          {navData[key].a.children}
        </a>
      </Item>
    ));
    return (
      <TweenOne component="header" animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div {...dataSource.page} className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}>
          <TweenOne animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }} {...dataSource.logo} >
            {/* <img width="100%" src={dataSource.logo.children} alt="img" /> */}
            <div>  {dataSource.logo.logoname} </div>
          </TweenOne>
          {isMobile && (
            <div {...dataSource.mobileMenu} onClick={() => { this.phoneClick() }}>
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            ref={this.menu}
            style={isMobile ? { height: menuHeight } : null}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['0']}
              theme={isMobile ? 'dark' : 'default'}
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default AppTopNavBar;
