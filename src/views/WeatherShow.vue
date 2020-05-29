<template>
  <div>
    <h1 class="mui--text-headline">Your Local Weather</h1>
    <OneDay v-for="(detail, index) in details" :key="index" :detail="detail"/>
    <button class="mui-btn mui-btn--primary tab"
            :class="{ activeTab: selectedTab === tab }"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selectedTab = tab">
            {{ tab }}</button>
  </div>
</template>

<script>
import OneDay from '@/components/OneDay.vue';
import WeatherService from '@/services/WeatherService';

export default {
  name: 'WeatherShow',
  props: ['zip'],
  components: {
    OneDay,
  },
  data() {
    return {
      details: [],
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
  },
};
</script>

<style scoped>
.activeTab {
  background-color: #FF4081;
}
</style>
