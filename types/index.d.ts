import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $esri:  loader
    }
}
declare interface loader {
    loadModules(modules: string[]): Promise<any[]>;
}
declare const VMap: PluginObject
export declare const ScriptLoader: loader
export default VMap