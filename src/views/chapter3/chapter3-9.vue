<template>
    <p>{{ counter + counter2 }}</p>
    <!--    ref를 참조하여 직접 값 증가   -->
    <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
    <!--    함수를 통해 값 증가     -->
    <button @click="onClick">클릭하면 숫자가 올라갑니다.</button>
    <button @click="onClick2">클릭하면 숫자가 올라갑니다.</button>
</template>

<script>
    import { ref } from 'vue'

    export default {
        data() {
            return {
                counter2: 0,
            }
        },
        setup() {
            let counter = ref(0)

            const onClick = (evt) => {
                if (evt) {
                    evt.preventDefault()
                    counter.value++
                }
            }
            return {
                counter,
                onClick,
            }
        },
        // methods옵션에 선언된 함수는 data 함수옵션에 선언된 변수만 접근 가능
        methods: {
            onClick2: function (evt) {
                if (evt) {
                    evt.preventDefault()
                }
                this.counter2++
            },
        },
    }
</script>