<template>
  <div>
    <v-map :load-css="true">什么情况</v-map>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component
  export default class App extends Vue {
    name = 'App'
    mounted () {
      Vue.esri.loadModules(['esri/map', 'esri/dijit/Basemap']).then(([Map, BaseMap]) => {
        // do something here
      })
    }
  }
</script>
<style lang="less">
// @import url("/arcgisAPI/3.22/esri/css/esri.css");
</style>
<style>

</style>
