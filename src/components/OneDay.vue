<template>
  <div>
    <div class="mui-row">
      <div class="mui-col-md-8 mui--text-left">
        <p class="mui-subhead">{{ detail.city_name }}, {{ detail.state_code }}</p>
        <img :src="require('@/assets/icons/' + detail.weather.icon + '.png')">
        <p class="mui--text-body1">{{ detail.weather.description }}</p>
        <p class="mui--text-body1">Chance of Rain {{ detail.precip }}%</p>
        <p class="mui--text-body1">Cloud Coverage {{ detail.clouds }}%</p>
      </div>
      <div class="mui-col-md-4">
        <h2 class="mui--text-display4">{{ detail.temp }}&deg;</h2>
        <p class="mui--text-body2">Feels like {{ detail.app_temp }}&deg;</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: Object,
  },
};
</script>

<style scoped>
img {
  width: 60px;
}
</style>
