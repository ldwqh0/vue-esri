import Vue from 'vue'
import { EsriLoader } from './loders'

declare module 'vue/types/vue' {
    interface Vue {
        $esriLoader: EsriLoader
    }
}

declare module 'vue/types/vue' {
    interface VueConstructor {
        EsriLoader: EsriLoader
    }
}