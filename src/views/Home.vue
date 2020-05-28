<template>
  <div class="mui-container weather">
    <h1 class="mui--text-display1">Local Weather</h1>
    <ZipSubmit/>
  </div>
</template>

<script>
import ZipSubmit from '@/components/ZipSubmit.vue';

export default {
  name: 'Home',
  components: {
    ZipSubmit,
  },
};
</script>
