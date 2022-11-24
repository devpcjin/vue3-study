<template>
    <p>{{ counter }}</p>
    <p v-if="counter < 5">5보다 작습니다.</p>
    <!--    v-if는 조건이 변경될 때마다 해당 엘리먼트를 다시 그려야함
            v-show는 조건자주 변경되어도 매우 빠른 전환이 일어남 - 조건에 맞지 않는 엘리먼트는 hide 처리   -->

    <!--    v-if는 조건에 따라 컴포넌트가 실제로 제거되고 생성
             v-show 는 단순히 css 의 display 속성만 변경   -->
    <p v-else>5와 같거나 큽니다.</p>
    <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
</template>

<script>
    import { ref } from 'vue'

    export default {
        // Composition API
        setup() {
            let counter = ref(0)
            return {
                counter,
            }
        },
    }
</script>