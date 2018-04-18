import config from './config'
import EsriLoader from './esri-loader'
import VMap from '../components/VMap'

export default {
  install (Vue, option = {}) {
    Vue.component(VMap.name, VMap) // 注册 VMap组件
    Vue.prototype.$esriLoader = Vue.EsriLoader = EsriLoader // 绑定esri-loader
    Object.assign(config, option) // 混入选项
    window['dojoConfig'] = option.dojoConfig
  }
}
