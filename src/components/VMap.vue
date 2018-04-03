<template>
  <div class="map" id='map' style="height:500px;" />
</template>
<script>
  export default {
    name: 'VMap',
    mounted () {
      this.$esri.loadModules(['esri/map']).then(([Map]) => {
        var map = new Map('map', {
          center: [-118, 34.5],
          zoom: 8,
          basemap: 'topo'
        })
        console.dir(map)
      })
    }
  }
</script>
<style>

</style>
