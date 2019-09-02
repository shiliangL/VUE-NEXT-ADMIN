<template>
  <div id="mapContainer">

  </div>
</template>

<script>
export default {
 mounted() {
    // eslint-disable-next-line no-undef
    const BMapObject = new BMap.Map("mapContainer");
    console.log(BMapObject);
 },
}
</script>

<style lang="scss" scoped>
 #mapContainer{
   width: 400px;
   height: 400px;
 }
</style>
