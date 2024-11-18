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
    const svgText = response.data;
    const base64Svg = btoa(svgText);
    svgSrc.value = `data:image/svg+xml;base64,${base64Svg}`;
  } catch (error) {
    console.error('Error fetching SVG:', error);
  }
})
console.log(data);
</script>

<template>
  <div>
    <img :src="svgSrc" alt="Image" />
  </div>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 400" width="280" height="400">
      <defs>
        <pattern id="headerImage" patternUnits="userSpaceOnUse" width="280" height="160">
          <image :href="data?.header_url" x="0" y="0" width="280" height="160" preserveAspectRatio="xMidYMid slice" />
        </pattern>
      </defs>
      <rect class="container" x="0" y="0" width="280" height="400" rx="10" ry="10" />
      <rect class="header" x="0" y="0" width="280" height="160" />
      <rect class="container" x="0" y="160" width="280" height="240" />
      <image class="avatar" :href="data?.avatar_url" x="90" y="110" width="100" height="100" preserveAspectRatio="xMidYMid slice" />
      <text class="text title" x="140" y="240" text-anchor="middle">{{ data?.name }}</text>
      <text class="text subtitle" x="140" y="265" text-anchor="middle">{{ username }}</text>
      <line x1="0" y1="300" x2="280" y2="300" class="divider" />
      <g transform="translate(70, 340)">
        <text class="text stats" x="0" y="0" text-anchor="middle">{{ data?.sent_public_works_count }}</text>
        <text class="text label" x="0" y="20" text-anchor="middle">约稿数</text>
      </g>
      <g transform="translate(140, 340)">
        <text class="text stats" x="0" y="0" text-anchor="middle">{{ data?.received_works_count }}</text>
        <text class="text label" x="0" y="20" text-anchor="middle">接稿数</text>
      </g>
      <g transform="translate(210, 340)">
        <text class="text stats" x="0" y="0" text-anchor="middle">{{ data?.acceptable ? '开放' : '关闭' }}</text>
        <text class="text label" x="0" y="20" text-anchor="middle">请求状态</text>
      </g>
    </svg> -->
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
