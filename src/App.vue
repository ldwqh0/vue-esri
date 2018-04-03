<template>
  <div>
    <v-map :option="option">什么情况</v-map>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component({})
  export default class App extends Vue {
    name= 'App'
    mounted () {
      Vue.esri.loadModules(['esri/map', 'esri/dijit/Basemap']).then(([Map, BaseMap]) => {

      })
    }
  }
</script>
<style lang="less">

</style>
