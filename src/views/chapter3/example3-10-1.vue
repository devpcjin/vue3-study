<template>
    <input type="button" id="toggle" value="toggle" @click="toggle()">
    <h4>key의 값 {{ key }}</h4>
    <div>
        <h3>v-if</h3>
        <div v-if="key">
            v-if
        </div>
    </div>
    <div>
        <h3>v-show</h3>
        <div v-show="key">
            v-show
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: true
            }
        },
        methods: {
            toggle: function () {
                this.key = !this.key
            }
        },
    }
</script>