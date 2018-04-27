import './vue'
import Config from './config'
import { PluginObject,PluginFunction } from 'vue'
import ScriptLoader from './script-loader'
import EsriLoader from './esri-loader'
import CssLoader from './css-loader'
export { ScriptLoader, EsriLoader, CssLoader }
declare const Plugin: PluginObject<Config>
export default Plugin
