<template>
  <div class="mui-row mui-panel weather-results">
    <div class="mui-col-md-8 mui--text-left">
      <p class="mui-subhead">{{ detail.city_name }}, {{ detail.state_code }}</p>
      <p class="mui-subhead">Date</p>
      <span class="material-icons">wb_sunny</span>
      <p class="mui--text-body1 forecast">Sunny with a high of 75</p>
    </div>
    <div class="mui-col-md-4">
      <h2 class="mui--text-display4 temp">72&deg;</h2>
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
