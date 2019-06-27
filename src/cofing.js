export default {
  /**
   * 系统名称 LOGO
   */
  logo: 'brand',

  LogoName: 'brand',
  // 接口前缀url
  prefix: '/v1/api/',
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'VUE—NEXT-ADMIN',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: '',
    pro: ''
  },

  homeName: 'home',

  copyright: '©2019 shiliangL',

  copyrightLogin: 'shiliangL©2019 v1.0.166',

  github: 'https://github.com/shiliangL/VUE-NEXT-ADMIN'
}
