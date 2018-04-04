import Vue from 'vue'
declare module "vue/types/vue" {
    interface Vue {
        $esri: ScriptLoader
    }
}

interface ScriptLoader {
  loadModules (modules: string[]):Promise<any[]>
}
