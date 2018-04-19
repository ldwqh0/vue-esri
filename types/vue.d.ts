import Vue from 'vue'
import { EsriLoader } from './esri-loader'

declare module 'vue/types/vue' {
    interface Vue {
        $esriLoader: EsriLoader
    }
}

declare module 'vue/types/vue' {
    // 可以使用 `VueConstructor` 接口
    // 来声明全局属性
    interface VueConstructor {
        EsriLoader: EsriLoader
    }
}