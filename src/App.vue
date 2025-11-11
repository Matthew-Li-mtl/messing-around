<script setup>
import { ref } from 'vue'
import BigButton from "./components/BigButton.vue"
import bigDict from "./formulas/bigDict.json" //  [  ]  []
const count = ref(0)
const ageText = ref("")

function updateAgeText() {

  count.value++

  if (count.value < 13) {
    ageText.value = ` I am ${count.value} years old.`
  } else if (count.value < 90) {
    let ageCategory = ""
    const ageMaximums = bigDict["age-maximums"]
    ageMaximums.forEach(ageMaxEntry => {
      let ageMax = parseInt(ageMaxEntry["age-max"])
      let ageMin = parseInt(ageMaxEntry["age-min"])
      if (ageMax >= count.value && ageMin <= count.value) {
        ageCategory = ageMaxEntry["age-category"]
        ageText.value = ` I am ${ageCategory} (${count.value} years old).`
        return
      }
    })
  } else {
    let yearsSinceDeath = count.value - 90
    ageText.value = ` I am dead. (I died ${yearsSinceDeath} years ago.)`
    return
  }

  console.log(ageText.value)
  console.log("hello!")
  return
}

</script>

<template>
  <div>
    <h1> Hello, Mars! </h1>
    <BigButton v-model="ageText" @click = "updateAgeText()">
      "Hello!{{ageText}}"
    </BigButton>
  </div>
</template>
