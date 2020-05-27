<template>
  <div class="mui-container weather">
    <h1 class="mui--text-display1">Local Weather</h1>
    <OneDay v-for="(detail, index) in details" :key="detail.index" :detail="detail"/>
  </div>
</template>

<script>
import OneDay from '@/components/OneDay.vue';
import WeatherService from '@/services/WeatherService';

export default {
  name: 'Weather',
  components: {
    OneDay,
  },
  data() {
    return {
      details: [],
    };
  },
  created() {
    WeatherService.getDetails()
      .then((response) => {
        this.details = response.data.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>
