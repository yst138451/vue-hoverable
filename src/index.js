import Hoverable from './vue-hoverable';

export default {
  install(Vue) {
    Vue.component(Hoverable.name, Hoverable);
  }
}

export { Hoverable }