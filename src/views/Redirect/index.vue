<script>
export default {
  name: 'Redirect',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$router.replace({
        path: to.params.redirect
      })
    })
  },
  render(h) {
    return h()
  }
}
</script>
