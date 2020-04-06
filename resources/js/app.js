import Vue from 'vue'
import vuetify from './plugin'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

new Vue({
    vuetify
}).$mount('#app');
