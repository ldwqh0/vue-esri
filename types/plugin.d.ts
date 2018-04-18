import Vue, { Vue as _Vue } from 'vue'
import { Config } from './config'

export declare interface Plugin {
    install(Vue: _Vue, options?: Config): void
}

declare const Plugin: Plugin
export default Plugin