<script setup>

    import { ref } from 'vue'

    import { incrementText } from '../../../utils/Utils.js'

    const props = defineProps({
        message: String,
        minChar: Number,
        maxChar: Number
    })

    const counterText = ref("Big Button Can Count!")
    const decimalCount = ref(0)
    const defaultText = ref(true)



    function updateCounterText() {
        if (defaultText.value) {
            counterText.value = message
            defaultText.value = false
        }
        counterText.value = incrementText(counterText.value, minChar, maxChar)
        decimalCount.value++
    }

</script>


<template>
    <button @click="updateCounterText">
        {{ counterText }}
    </button>
</template>