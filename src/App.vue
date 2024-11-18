<script setup>
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

const username = "@hy_plus"

const data = ref()
const svgSrc = ref('')

onMounted(async () => {
  try {
    const response = await axios.get(`/api?username=${username}`);
    data.value = response.data;
  } catch (error) {
    console.error('Error fetching SVG:', error);
  }
})
console.log(data);
</script>

<template>
  <div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container {
  fill: white;
  stroke: black;
  stroke-width: 1;
}

.header {
  fill: url(#headerImage);
}

.avatar {
  clip-path: circle(50%);
}

.text {
  font-family: Arial, sans-serif;
}

.title {
  font-size: 22px;
}

.subtitle {
  font-size: 16px;
}

.stats {
  font-size: 25px;
}

.label {
  font-size: 12px;
}

.divider {
  stroke: gray;
  stroke-width: 1;
}
</style>
