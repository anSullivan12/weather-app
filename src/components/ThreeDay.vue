<template>
  <div class="mui-col-md-3 mui-panel">
    <p class="mui--text-caption">{{ forecast.datetime }}</p>
    <h2 class="mui--text-display3">{{ forecast.temp }}&deg;</h2>
    <p class="mui--text-body2">Feels like {{ forecast.app_temp }}&deg;</p>
    <img :src="require('@/assets/icons/' + forecast.weather.icon + '.png')">
    <p class="mui--text-body1">{{ forecast.weather.description }}</p>
    <p class="mui--text-body1">Chance of Rain {{ forecast.pop }}%</p>
    <p class="mui--text-body1">Cloud Coverage {{ forecast.clouds }}%</p>
  </div>
</template>

<script>
export default {
  props: {
    forecast: Object,
  },
  data() {
    return {
      forecasts: [],
    };
  },
};
</script>
