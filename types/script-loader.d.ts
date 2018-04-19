declare interface ScriptLoader {
    loadScript(url: string): Promise<any>
}
declare const ScriptLoader: ScriptLoader
export default ScriptLoader