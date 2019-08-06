<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
html, body, #app {
  height: 100%;
}

body {
  background-color: #fff;
  overflow: hidden;
}

.cube-bar {
  z-index: 10;
  position: absolute;
  right: 0;
  left: 0;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #EDF0F4;
  box-shadow: 0 2px 1px #e9eaea;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }
}

.cube-content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  .cube-list {
    padding-left: 10px;
    z-index: 1;

    .cube-index-list-group {
      .cube-index-list-anchor {
        font-size: 16px;
      }

      ul {
        .cube-item {
          height: 40px;
          line-height: 40px;
          padding-left: 16px;

          .link {
            display: block;
            position: relative;
            width: 100%;
            color: #333;
            text-decoration: none;
            outline: 0;

            .cubeic-arrow {
              position: absolute;
              right: 0;
              padding: 0 5px;
              color: #ccc;
            }
          }
        }
      }
    }

    .cube-index-list-nav {
      margin-right: 0px;
      padding: 8px 5px;
      border-radius: 3px 0 0 3px;
      background: #f7f7f7;
      box-shadow: 0 0 5px #80808047;

      >ul {
        >li {
          padding: 8px 0;
        }
      }
    }

    .cube-index-list-fixed {
      font-size: 16px;
    }
  }
}
</style>
