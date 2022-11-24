import {  ref } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// example3-15
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

// example3-16
app.component ('MyComponent', {
    props: {
        title: {
            type: String,
            required: true,
            validator: function (value) {
                return typeof value == String
            },
        },
        data: {
            type: Object,
            default: () => {
                return []
            },
        },
    },
    template: `
        <h3 v-text="title"/>
        <span v-for="i in data" :key="i">{{ i }}</span>
    `,
})

//example3-17
app.component('Component', {
    setup(props,context) {
        const msg = context.attrs.msg
        return {
            msg,
        }
    },
    template: `
        <Component3></Component3>
    `,
})

app.component('Component2', {
    inheritAttrs: false,
    setup(props,context) {
        const msg = context.attrs.msg
        return {
            msg,
        }
    },
    template: `
        <Component3></Component3>
    `,
})

app.component('Component3', {
    setup(props,context) {
        const msg = context.attrs.msg
        return {
            msg,
        }
    },
    template: `
        <div>
            <p>@Component: {{ $attrs.msg }}</p>
        </div>
    `,
})

app.config.globalProperties.title = 'Vue 3 Demo'
app.provide('counter_header', 'Counter ')

app.use(router)

app.mount('#app')
