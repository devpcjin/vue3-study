<template>
    <h3> {{ chapter }}</h3>
    <div class = "button-section">
        <button type="button"><router-link to="/chapter3/3-7">Example 3-7</router-link></button>
    </div>
    <router-view></router-view>
</template>

<script>

</script>

<style>
    .button-section {
        width: 100%;
        border-bottom-color : #1a1a1a;
    }
</style>