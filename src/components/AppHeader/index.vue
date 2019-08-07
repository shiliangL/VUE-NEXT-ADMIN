<template>
  <header class="header">
    <h1 v-text="title" />
    <i v-if="backAction" class="cubeic-back" @click="back" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    backAction: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
