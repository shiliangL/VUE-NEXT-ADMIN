import React, { Component } from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './index.scss';
const BgElement = Element.BgElement;

export default class AppBanner extends Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user AppBanner" autoPlay>
        <Element prefixCls="banner-user-elem" key="0" >
          <BgElement key="bg" className="bg" style={{ background: '#364D79'}} />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement key="bg" className="bg" style={{ background: '#64CBCC' }} />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>);
  }
}
