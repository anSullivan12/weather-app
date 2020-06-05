<template>
  <div class="mui-container weather">
    <h1 class="mui--text-display1">Your Preferences</h1>
    <div class="mui-panel">
      <form>
        <div class="mui-radio">
          <label>
            <input type="radio" name="light" id="light" value="light" v-model="colorPref" @click="switchTheme()">
            Light
          </label>
        </div>
        <div class="mui-radio">
          <label>
            <input type="radio" name="dark" id="dark" value="dark" v-model="colorPref" @click="switchTheme(dark)">
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
      dark: '',
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
  methods: {
    switchTheme(dark) {
      // const color = localStorage.getItem('colorPref');
      // const head = document.getElementsByTagName('head');
      // const link = document.createElement('link');
      // link.rel = 'stylesheet';
      // link.type = 'text/css';
      // link.href = 'css/darktheme.css';

      if (dark) {
        // add the dark theme CSS
        // head.appendChild(link);
        console.log('DARK THEME');
      } else {
        // remove dark theme CSS
        // head.removeChild(link);
        console.log('LIGHT THEME!');
      }
    },
  },
};
</script>
