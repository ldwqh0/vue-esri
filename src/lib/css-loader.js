const createLink = (url) => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  return link
}

const linkExist = url => document.querySelector(`link[href='${url}']`) !== null

/**
 * 一个css加载器，通过向document中插入link的方式加载css
 */
export default {
  loadCss (url) {
    if (!linkExist(url)) {
      document.head.appendChild(createLink(url))
    }
  }
}
