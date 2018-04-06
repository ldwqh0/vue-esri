<template>
  <div ref="map" class="map" style="height:500px;" />
</template>
<script>
  import { EsriLoader, CssLoader } from '../lib'
  import config from '../lib/config'
  export default {
    name: 'VMap',
    props: {
      option: { // 地图初始化选项
        type: Object,
        default () {
          return {
            center: [103.66, 30.06],
            zoom: 4,
            basemap: 'topo'
          }
        }
      },
      loadCss: { // 是否加载css文件
        type: Boolean,
        default: false
      }
    },
    created () {
      if (this.loadCss) {
        CssLoader.loadCss(config.css)
      }
    },
    mounted () {
      EsriLoader.loadModules(['esri/map']).then(([Map]) => {
        let map = new Map(this.$refs.map, this.option)
        this.$emit('create', map)
        map.on('load', arg => {
          this.$emit('load', arg)
        })
      })
    }
  }
</script>
