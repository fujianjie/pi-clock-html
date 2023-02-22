<template>
  <div class="clock">
    {{ dateStr }}<br/>
    {{ timeStr }}
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue"

const dateStr = ref("")
const timeStr = ref("")

setInterval(()=>{
  const tempStr = (new Date().toLocaleString()).split(' ')
  dateStr.value = tempStr[0]
  timeStr.value = tempStr[1]
}, 1000)

</script>

<style lang="scss" scoped>
.clock {
  font-size: 15vw;
  text-align: center;
}
</style>
