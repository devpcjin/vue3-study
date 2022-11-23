<template>
    <p>줄임말과 원래말을 입력하세요.</p>
    <!-- v-bind는 템플릿을 통해 변수를 변경시킬 수 없음 (abbr값은 변경 안됨 - 일방작용)-->
    <input type="text" v-bind:value="abbr" />
    <!-- v-model은 템플릿을 통해 변수를 변경시킬 수 있음 (normal값은 변경 됨 - 양방향 작용)-->
    <input type="text" v-model="normal" />
    <hr />
    <abbr v-bind:title="normal">{{ abbr }}</abbr>
</template>

<script>
    import { ref } from 'vue'

    export default {
        setup() {
            const abbr = ref('DOPT')
            const normal = ref('Dong Project Team')
            return {
                abbr,
                normal,
            }
        },
    }
</script>