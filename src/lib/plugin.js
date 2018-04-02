import config from './config'
import ScriptLoader from './script-loader'
import VMap from '../components/VMap'

export default {
  install (Vue, option) {
    Vue.component(VMap.name, VMap)
    Vue.esri = ScriptLoader
    Vue.prototype.$esri = ScriptLoader
    if (option.url) {
      config.url = option.url
    }
    if (option.dojoConfig) {
      window['dojoConfig'] = option.dojoConfig
    }
  }
}
