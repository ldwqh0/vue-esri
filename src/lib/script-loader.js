import config from './config'

const queue = [] // 定义一个操作队列，用于储存script没有完成加载时的任务

const createScript = (url) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  return script
}

const scriptExist = function () {
  return !(document.querySelector('script[data-esri-loader]') === null)
}

const loadScript = () => {
  if (scriptExist()) {
    return
  }

  let script = createScript(config.url)
  script.setAttribute('data-esri-loader', 'loading')
  document.body.appendChild(script)
  const onScriptLoad = () => {
    script.removeEventListener('load', onScriptLoad)
    script.setAttribute('data-esri-loader', 'loaded')
    // 获取队列里面的任务，依次执行
    while (queue.length > 0) {
      let fn = queue.shift()
      fn()
    }
  }
  script.addEventListener('load', onScriptLoad)
}

export default {
  loadModules (modules) {
    return new Promise((resolve, reject) => {
      const resolveModules = modules => {
        const globalRequire = window['require']
        globalRequire(modules, (...args) => {
          resolve(args)
        })
      }
      if (window['require']) {
        resolveModules(modules)
      } else {
        queue.push(() => {
          resolveModules(modules)
        })
        loadScript()
      }
    })
  }
}
