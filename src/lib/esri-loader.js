import ScriptLoader from './script-loader'
import config from './config'

const resolveModules = (modules) => {
  return new Promise((resolve, reject) => {
    const globalRequire = window['require']
    globalRequire(modules, (...args) => {
      resolve(args)
    })
  })
}

/**
 * esri模块加载器，依赖于scriptLoader模块加载器
 */
export default {
  loadModules (modules) {
    if (window['require']) {
      return resolveModules(modules)
    } else {
      return ScriptLoader.loadScript(config.url).then(() => {
        return resolveModules(modules)
      }).catch(e => {
        console.error('load modules error', e)
      })
    }
  }
}
