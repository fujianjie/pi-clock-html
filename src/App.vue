<template>
  <div class="clock">
    {{ dateStr }}<br/>
    {{ timeStr }}<br/>
    <span>{{ weather }}</span>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue"
import {weatherApi} from "@/api/weather";

const dateStr = ref("")
const timeStr = ref("")
const weather = ref("")
const bodyTag = document.getElementsByTagName('body')[0]
const whiteTheme = 'white-theme'
const blackTheme = 'black-theme'
setInterval(() => {
  const tempStr = (new Date().toLocaleString()).split(' ')
  dateStr.value = tempStr[0]
  timeStr.value = tempStr[1]
  const dateObj = new Date()
  if ((dateObj.getHours() >= 7 && dateObj.getHours() < 19) && bodyTag.className !== whiteTheme) {
    bodyTag.className = whiteTheme
  }
  if ((dateObj.getHours() >= 19 || dateObj.getHours() < 7) && bodyTag.className !== blackTheme) {
    bodyTag.className = blackTheme
  }
  if (dateObj.getHours() % 2 === 0 && dateObj.getMinutes() === 0 && dateObj.getSeconds() === 0) {
    setWeather()
  }
}, 1000)

async function setWeather() {
  weatherApi().then((resp: Record<string, any>) => {
    const content = `${resp.data.wea} ${resp.data.tem2}℃-${resp.data.tem1}℃`
    weather.value = content
  })
}

setWeather()
</script>

<style lang="scss" scoped>
.clock {
  font-size: 15vw;
  text-align: center;
  line-height: 33vh;

  span {
    font-size: 10vw;
    line-height: 20vh;
  }
}
</style>
