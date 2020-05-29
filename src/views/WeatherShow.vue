<template>
  <div>
    <OneDay v-for="(detail, index) in details" :key="index" :detail="detail"/>
    {{ details }}
  </div>
</template>

<script>
import WeatherService from '@/services/WeatherService';
import OneDay from '@/components/OneDay.vue';

export default {
  name: 'WeatherShow',
  props: ['zip'],
  components: {
    OneDay,
  },
  data() {
    return {
      details: [],
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
