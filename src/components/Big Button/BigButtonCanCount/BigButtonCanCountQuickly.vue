<script>

</script>

<script setup>
    import { ref } from 'vue'
    import BigButtonCanCount from './BigButtonCanCount.vue';
    import { incrementText } from "../../../utils/Utils.js"

    const defaultText = "Big Button Can Count Quickly!"
    const counterText = ref(defaultText)
    const decimalCount = ref(0)
    const minChar = 97
    const maxChar = 122

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