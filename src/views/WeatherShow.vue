<template>
  <div>
    <h1 class="mui--text-headline">Your Local Weather</h1>
    <div class="mui-container">
      <div class="mui-row mui-panel">
        <OneDay v-show="selectedTab === 'One Day Forecast'" v-for="(detail, index) in details" :key="index + 'daily'" :detail="detail"/>
        <MultiDay v-show="selectedTab === 'Three Day Forecast'" v-for="(forecast, index) in forecasts" :key="index + 'three'" :forecast="forecast" />
        <MultiDay v-show="selectedTab === 'Five Day Forecast'" v-for="(item, index) in items" :key="index + 'five'" :forecast="item" />
      </div>
    </div>
    <div v-show="selectedTab === 'Five Day Forecast'"></div>
    <button class="mui-btn mui-btn--primary tab"
            :class="{ activeTab: selectedTab === tab }"
            v-for="(tab, index) in tabs"
            :key="index + 'label'"
            @click="selectedTab = tab">
            {{ tab }}</button>
  </div>
</template>

<script>
import OneDay from '@/components/OneDay.vue';
import MultiDay from '@/components/MultiDay.vue';
import WeatherService from '@/services/WeatherService';

export default {
  name: 'WeatherShow',
  props: [
    'zip',
  ],
  components: {
    OneDay,
    MultiDay,
  },
  data() {
    return {
      details: [],
      forecasts: [],
      items: [],
      tabs: ['One Day Forecast', 'Three Day Forecast', 'Five Day Forecast'],
      selectedTab: 'One Day Forecast',
    };
  },
  created() {
    WeatherService.getDetails(this.zip)
      .then((response) => {
        this.details = response.data.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
    WeatherService.getThreeDayForecastDetails(this.zip)
      .then((response) => {
        this.forecasts = response.data.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
    WeatherService.getFiveDayForecastDetails(this.zip)
      .then((response) => {
        this.items = response.data.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>

<style scoped>
.activeTab {
  background-color: #FF4081;
}
</style>
