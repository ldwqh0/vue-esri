declare interface _loader {
    loadScript(url: string): Promise<any>
}
declare const ScriptLoader: _loader
export default ScriptLoader