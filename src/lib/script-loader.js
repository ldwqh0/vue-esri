// import option from './option'

function createScript (url) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  return script
}

export default {
  loadModules () {
    return new Promise((resolve, reject) => {
      let script = createScript('https://js.arcgis.com/4.6/')
      document.body.appendChild(script)
      script.addEventListener('load', () => {
        resolve(window['require'])
      })
    })
  }
}
