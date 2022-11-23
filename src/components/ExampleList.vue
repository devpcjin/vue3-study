<template>
    <h2>{{ msg }}</h2>
    <button type="button"><router-link to="/chapter3">Chapter3</router-link></button>
</template>

<script setup>
    defineProps({
        msg: String
    })
</script>