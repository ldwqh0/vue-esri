import VMap from '../components/VMap'
import ScriptLoader from './script-loader'

export default {
  install (Vue, option) {
    Vue.component('VMap', VMap)
    Vue.esri = ScriptLoader
  }
}
