<template>
  <div class="mui-container weather">
    <h1 class="mui--text-display1">Local Weather</h1>
    <form class="mui-form" @submit.prevent="submitZip">
      <div class="mui-textfield mui-textfield--float-label">
        <input type="text" name="zip" v-model="zip">
        <label>Zip Code</label>
      </div>
      <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      zip: null,
    };
  },
  methods: {
    submitZip() {
      console.log(this.zip);
    },
  },
};
</script>
