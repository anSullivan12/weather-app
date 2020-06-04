<template>
  <div class="mui-container weather">
    <h1 class="mui--text-display1">Your Preferences</h1>
    <div class="mui-panel">
      <form>
        <div class="mui-radio">
          <label>
            <input type="radio" name="light" id="light" value="light" v-model="colorPref" checked>
            Light
          </label>
        </div>
        <div class="mui-radio">
          <label>
            <input type="radio" name="dark" id="dark" value="dark" v-model="colorPref">
            Dark
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPreferences',
  data() {
    return {
      colorPref: '',
    };
  },
  mounted() {
    if (localStorage.colorPref) {
      this.colorPref = localStorage.colorPref;
    }
  },
  watch: {
    colorPref(newcolorPref) {
      localStorage.colorPref = newcolorPref;
    },
  },
};
</script>
