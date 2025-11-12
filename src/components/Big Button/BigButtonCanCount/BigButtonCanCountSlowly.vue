<script>

</script>

<script setup>
    import { ref } from 'vue'
    import BigButtonCanCount from './BigButtonCanCount.vue';
    import { incrementText } from "../../../utils/Utils.js"

    const defaultText = "Big Button Can Count!"
    const counterText = ref(defaultText)
    const decimalCount = ref(0)
    const minChar = 32
    const maxChar = 126

    function updateCounterText() {
        counterText.value = incrementText(counterText.value, minChar, maxChar)
        decimalCount.value++
    }
</script>

<template>
    <button @click="updateCounterText">
        {{ counterText }}
    </button>
</template>