<template>
  <div class="mui-container weather">
    <h1 class="mui--text-display1">Local Weather for 44720</h1>
    <div class="mui-row mui-panel weather-results">
      <div class="mui-col-md-8 mui--text-left" v-for="detail in details" :key="detail.id" :detail="detail">
        <p class="mui-subhead">{{ detail.city_name }}, {{ detail.state_code }}</p>
        <p class="mui-subhead">Date</p>
        <span class="material-icons">wb_sunny</span>
        <p class="mui--text-body1 forecast">Sunny with a high of 75</p>
      </div>
      <div class="mui-col-md-4">
        <h2 class="mui--text-display4 temp">72&deg;</h2>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherService from '@/services/WeatherService';

export default {
  name: 'OneDay',
  data() {
    return {
      detail: [],
    };
  },
  created() {
    WeatherService.getData()
      .then(response => {
        this.details = response.data;
      });
  },
};
</script>
