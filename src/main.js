import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./routes";
import { store } from './store/store'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
