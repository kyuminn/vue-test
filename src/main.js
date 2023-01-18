import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponent from "@/components/GlobalComponent";

Vue.config.productionTip = false

// main.js를 깔끔하게 쓰기 위해서는 글로벌 컴포넌트를 등록하는 js를 따로 만들고 여기에 플러그인 식으로 넣어주는 게 나을 듯.
// 참고 : https://itinerant.tistory.com/190
Vue.component('GlobalComponent',GlobalComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
