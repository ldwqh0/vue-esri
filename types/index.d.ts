import './vue'
import { PluginObject } from 'vue'
declare interface Config {
    css?: string | boolean
    url?: string
    dojoConfig?: any
}
export * from './loders'
declare const Plugin: PluginObject<Config>
export default Plugin
