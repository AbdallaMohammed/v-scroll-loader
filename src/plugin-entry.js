import ScrollLoader from './components/VScrollLoad.vue'

const ScrollLoaderPlugin = {
  install (Vue) {
    Vue.component(ScrollLoader.name, ScrollLoader)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ScrollLoaderPlugin)
}

export default ScrollLoaderPlugin
