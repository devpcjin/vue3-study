<template>
    <div style="width: 200px">
        <ol>
            <li v-for="item in items">{{ item }}</li>
        </ol>
        <ol>
            <li v-for="(item2, key) in items2">{{ key }} || {{ item2 }}</li>
        </ol>
        <ol>
            <li v-for="(item2, key, index) in items2">{{ key }} || {{ item2 }} || {{index}}</li>
        </ol>
    </div>
</template>

<script>
    import { reactive } from 'vue'

    export default {
        // Composition API
        setup() {
            const items = reactive(['1번 아이템', '2번 아이템', '3번 아이템'])
            const items2 = reactive({ 1: '1번 객체', 2: '2번 객체', 3: '3번 객체',})
            return {
                items,
                items2,
            }
        },
    }
</script>