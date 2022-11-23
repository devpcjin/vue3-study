<template>
    <div id="date">
        {{ date }}
    </div>
    <div id="date2">
        {{ date2 }}
    </div>
</template>

<script>
    export default {
        setup() {
            const date = Date().toString()
            return {
                date,
            }
        },

        data() {
            return {
                date2: Date().toString(),
            }
        },
    }
</script>