import {  ref } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('counter', {
    // provide 값을 불러 사용할 수 있다.
    inject: ['counter_header'],
    setup() {
        const count = ref(0)
        return { count }
    },
    template: `
        <span>{{ counter_header }}</span>
        <button @click="count++" v-text="count" />
        <hr/>
    `,
})

app.config.globalProperties.title = 'Vue 3 Demo'
app.provide('counter_header', 'Counter ')

app.use(router)

app.mount('#app')
