<template>
  <div class="mui-col-md-3 mui-panel">
    <p class="mui--text-caption">{{ item.datetime }}</p>
    <p class="mui--text-caption">{{ item.pod }}</p>
    <h2 class="mui--text-display3">{{ item.temp }}&deg;</h2>
    <p class="mui--text-body2">Feels like {{ item.app_temp }}&deg;</p>
    <img :src="require('@/assets/icons/' + item.weather.icon + '.png')">
    <p class="mui--text-body1">{{ item.weather.description }}</p>
    <p class="mui--text-body1">Chance of Rain {{ item.pop }}%</p>
    <p class="mui--text-body1">Cloud Coverage {{ item.clouds }}%</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>
