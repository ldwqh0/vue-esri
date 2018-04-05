<template>
  <div>
    <v-map>什么情况</v-map>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ScriptLoader } from '../dist/lib'
  @Component({})
  export default class App extends Vue {
    name= 'App'
    mounted () {
      ScriptLoader.loadModules(['esri/map', 'esri/dijit/Basemap']).then(([Map, BaseMap]) => {

      })
    }
  }
</script>
<style lang="less">

</style>
