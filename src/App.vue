<template>
  <div>
    <v-map>什么情况</v-map>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'App',
    mounted () {
      Vue.esri.loadModules(['esri/map', 'esri/dijit/Basemap']).then(([Map, BaseMap]) => {
        // do something here
      })
    }
  }
</script>
