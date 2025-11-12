<script>
export const testString2 = "hello"
</script>

//  [  ]  []
<script setup>
import { ref } from 'vue'
import BigButtonSays from "./BigButtonSays.vue"
import bigDict from "../../formulas/bigDict.json" 
const count = ref(0)
const ageText = ref("")
const dead = ref(false)
//const testString2 = "hello"

function isDead() {
    return dead
}

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
    dead.value = true
    ageText.value = ` I am dead. (I died ${yearsSinceDeath} years ago.)`
    return
  }

  return
}

defineExpose({
//    testString2,
    dead
})



</script>

<template>
    <BigButtonSays v-model="ageText" @click = "updateAgeText()">
        "Hello!{{ageText}}"
    </BigButtonSays>
</template>
