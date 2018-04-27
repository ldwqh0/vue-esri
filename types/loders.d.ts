declare interface EsriLoader {
    loadModules(modules: string[]): Promise<any[]>
}
declare interface CssLoader {
    loadCss(url: string): void
}
declare interface ScriptLoader {
    loadScript(url: string): Promise<any>
}
declare const EsriLoader: EsriLoader
declare const CssLoader: CssLoader
declare const ScriptLoader: ScriptLoader
export { EsriLoader, CssLoader, ScriptLoader }