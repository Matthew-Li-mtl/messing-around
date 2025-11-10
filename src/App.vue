<script setup>
import { ref } from 'vue'
import BigButton from "./components/BigButton.vue"
const count = ref(0)

</script>

<template>
  <div>
    <h1> Hello, Mars! </h1>
    <BigButton @click = "count++">
      Hello! I am {{count}} years old.
    </BigButton>
  </div>
</template>
