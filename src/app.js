import Vue from 'vue/dist/vue.js'
import Button from '../components/button'
import Icon from '../components/icon'

Vue.component('v-button', Button)
Vue.component('v-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false

    }
})