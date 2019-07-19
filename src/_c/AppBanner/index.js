import React, { Component } from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import './index.scss';
const BgElement = Element.BgElement;

export default class AppBanner extends Component {
  render() {
    const { isMobile } =  this.props
    return (
      <BannerAnim prefixCls="AppBanner banner1" arrow={isMobile}>
        <Element prefixCls="banner-user-elem" key="0" >
          <BgElement key="bg" className="bg" style={{ background: '#364D79'}} />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            A Awesome Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement key="bg" className="bg" style={{ background: '#64CBCC' }} />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            A Awesome Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>);
  }
}
