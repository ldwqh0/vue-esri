<template>
  <div ref="map" class="map" style="height:500px;" />
</template>
<script>
  export default {
    props: {
      option: {
        type: Object,
        default  () {
          return {
            center: [103.66, 30.06],
            zoom: 4,
            basemap: 'topo'
          }
        }
      }
    },
    name: 'VMap',
    mounted () {
      this.$esri.loadModules(['esri/map']).then(([Map]) => {
        let map = new Map(this.$refs.map, this.option)
        this.$emit('create', map)
        map.on('load', (arg) => {
          this.$emit('load', arg)
        })
      })
    }
  }
</script>
<style>

</style>
