
class TaskQueue {
  queue={}
  push ({url, task}) {
    let taskQueue = this.queue[url]
    if (taskQueue === undefined || taskQueue === null) {
      this.queue[url] = taskQueue = []
    }
    taskQueue.push(task)
  }
  get (url) {
    let taskQueue = this.queue[url]
    if (taskQueue !== undefined && taskQueue !== null) {
      return taskQueue.shift()
    } else {
      return null
    }
  }
}

const taskQueue = new TaskQueue() // 定义一个操作队列，用于储存script没有完成加载时的任务

const createScript = (url) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  return script
}

const scriptExist = function (url) {
  return document.querySelector(`script[src='${url}']`) !== null
}

const scriptLoaded = function (url) { // 检测脚本是否已经加载完成
  return scriptExist(url) && document.querySelector(`script[src='${url}']`).getAttribute('data-load-state') === 'loaded'
}

/**
 * 一个脚本加载器，用于动态脚本加载，基于Promise
 */
export default {
  loadScript (url) {
    return new Promise((resolve, reject) => {
      if (scriptLoaded(url)) { // 判断某个script是否已经加载
        resolve() // 如果加载，直接返回
      } else {
        taskQueue.push({url, task: resolve}) // 如果没有加载，将任务压入队列
        if (!scriptExist(url)) { // 判断script是否已经插入document,如果没有插入document,这执行插入动作
          let script = createScript(url)
          script.setAttribute('data-load-state', 'loading')
          document.body.appendChild(script)
          const onScriptLoad = () => { // 定义script加载完成之后的操作
            script.removeEventListener('load', onScriptLoad)
            script.setAttribute('data-load-state', 'loaded')
            // 获取队列里面的任务，依次执行
            let fn
            while ((fn = taskQueue.get(url)) !== undefined && fn !== null) {
              fn()
            }
          }
          script.addEventListener('load', onScriptLoad)
        }
      }
    })
  }
}
