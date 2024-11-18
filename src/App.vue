<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const username = "@hy_plus"

const data = ref()

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