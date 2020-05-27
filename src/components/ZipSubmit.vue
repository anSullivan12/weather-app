<template>
  <form class="mui-form">
    <div class="mui-textfield mui-textfield--float-label">
      <input type="text" name="zip" v-model="zip">
      <label>Zip Code</label>
    </div>
    <button type="submit" class="mui-btn mui-btn--primary" @click.stop.prevent="submitZip()">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      zip: null,
    };
  },
  methods: {
    submitZip() {
      console.log(this.zip);
      this.$router.push({ name: 'Weather' });
    },
  },
};
</script>
