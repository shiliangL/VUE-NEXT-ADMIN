<template>
  <div class="AppSiderMenu">
    <nav class="main-menu">
      <div class="scrollbar">
        <ul>
          <li v-for="(item,index) in siderList" :key="index">
            <i class="fa fa-home fa-lg"></i>
            <span class="nav-text">{{item.name}}</span>
          </li>

          <li>
            <i class="fa fa-user fa-lg"></i>
            <span class="nav-text">Login</span>
          </li>

          <li>
            <i class="fa fa-envelope-o fa-lg"></i>
            <span class="nav-text">Contact</span>
          </li>

          <li class="darkerlishadow">
            <i class="fa fa-clock-o fa-lg"></i>
            <span class="nav-text">News</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-desktop fa-lg"></i>
            <span class="nav-text">Technology</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-plane fa-lg"></i>
            <span class="nav-text">Travel</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-shopping-cart"></i>
            <span class="nav-text">Shopping</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-microphone fa-lg"></i>
            <span class="nav-text">Film & Music</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-flask fa-lg"></i>
            <span class="nav-text">Web Tools</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-picture-o fa-lg"></i>
            <span class="nav-text">Art & Design</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-align-left fa-lg"></i>
            <span class="nav-text">Magazines</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-gamepad fa-lg"></i>
            <span class="nav-text">Games</span>
          </li>

          <li class="darkerli">
            <i class="fa fa-glass fa-lg"></i>
            <span class="nav-text">Life & Style</span>
          </li>

          <li class="darkerlishadowdown">
            <i class="fa fa-rocket fa-lg"></i>
            <span class="nav-text">Fun</span>
          </li>
        </ul>

        <li>
          <i class="fa fa-question-circle fa-lg"></i>
          <span class="nav-text">Help</span>
        </li>

        <ul class="logout">
          <li>
            <i class="fa fa-lightbulb-o fa-lg"></i>
            <span class="nav-text">BLOG</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

import { constantRoutes } from '@/router/routers'

export default {
  name: 'AppSiderMenu',
  data() {
    return {
      appSiderMenuList: []
    }
  },
  computed: {
    siderList() {
      const list = constantRoutes.find(item => item.name === 'layout')
      return list ? list.children : []
    }
  },
  mounted() {
    console.log(constantRoutes, '路由')
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
/* ScrolBar  */
.AppSiderMenu{

}

.scrollbar {
  height: 90%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}

.scrollbar:hover {
  height: 90%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.fa-lg {
  font-size: 1em;
}
.fa {
  position: relative;
  display: table-cell;
  width: 55px;
  height: 36px;
  text-align: center;
  top: 12px;
  font-size: 20px;
}

.main-menu:hover,
nav.main-menu.expanded {
  width: 250px;
  overflow: hidden;
  opacity: 1;
}

.main-menu {
  // width: 250px;
  background: #f7f7f7;
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  width: 55px;
  overflow: hidden;
  transition: width 0.2s linear;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  opacity: 1;
  z-index: 99999999;
}

.main-menu > ul {
  margin: 7px 0;
}

.main-menu li {
  cursor: pointer;
  position: relative;
  display: block;
  width: 250px;
}

.main-menu li > a {
  position: relative;
  width: 255px;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  color: #8a8a8a;
  font-size: 13px;
  text-decoration: none;
  transition: all 0.14s linear;
  font-family: "Strait", sans-serif;
  border-top: 1px solid #f2f2f2;

  text-shadow: 1px 1px 1px #fff;
}

.main-menu .nav-icon {
  position: relative;
  display: table-cell;
  width: 55px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
}

.main-menu .nav-text {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;
  font-family: "Titillium Web", sans-serif;
}

.main-menu .fb-like {
  left: 180px;
  position: absolute;
  top: 15px;
}

.main-menu > ul.logout {
  position: absolute;
  left: 0;
  bottom: 0;
}

.no-touch .scrollable.hover {
  overflow-y: hidden;
}

.no-touch .scrollable.hover:hover {
  overflow-y: auto;
  overflow: visible;
}

a:hover,
a:focus {
  text-decoration: none;
  border-left: 0px solid #f7f7f7;
}

nav {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

nav ul,
nav li {
  outline: 0;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

/* Darker element side menu Start*/

.darkerli {
  background-color: #ededed;
  text-transform: capitalize;
}

.darkerlishadow {
  background-color: #ededed;
  text-transform: capitalize;
  -webkit-box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
  -moz-box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
  box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
}

.darkerlishadowdown {
  background-color: #ededed;
  text-transform: capitalize;
  -webkit-box-shadow: inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
  -moz-box-shadow: inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
  box-shadow: inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
}

/* Darker element side menu End*/

.main-menu li:hover,
nav.main-menu li.active,
.dropdown-menu > li:hover,
.dropdown-menu > li:focus,
.dropdown-menu > .active,
.dropdown-menu > .active:hover,
.dropdown-menu > .active:focus,
.no-touch .dashboard-page nav.dashboard-menu ul li:hover,
.dashboard-page nav.dashboard-menu ul li.active{
  color: #fff;
  background-color: #00bbbb;
  text-shadow: 0px 0px 0px;
}
</style>
