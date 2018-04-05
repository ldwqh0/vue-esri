import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $myProperty: string
    }
}
declare interface loader {
    loadModules(modules: string[]): Promise<any[]>;
}
declare const VMap: PluginObject
export declare const ScriptLoader: loader
export { default as ScriptLoader } from './script-loader'
export default VMap