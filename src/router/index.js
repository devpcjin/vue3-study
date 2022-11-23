import { createRouter, createWebHistory } from 'vue-router'
import ExampleList from '/@components/ExampleList.vue'
import DateRendering from '/@views/chapter3/DateRendering.vue'
import Chapter from '/@components/Chapter.vue'

const routes = [
    {
        path: '/',
        name: 'ExampleList',
        component: ExampleList,
    },
    {
        path: '/chapter3',
        name: 'Chapter',
        component: Chapter,
        children: [
            {
                path: "3-7",
                component: DateRendering,
                name: 'DateRendering',
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router