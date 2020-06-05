<template>
  <div>
    <button class="mui-btn mui-btn--raised mui-btn--danger" :title="theme == 'dark' ? 'Dark Theme' : 'Light Theme'" @click="toggleTheme()">Theme</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: localStorage.getItem('theme'),
    };
  },
  created() {
    if (this.theme === 'light') {
      console.log('user has light theme selected');
    } else {
      document.body.setAttribute('class', 'darkBody');
    }
  },
  methods: {
    toggleTheme() {
      if (this.theme === 'dark') {
        this.theme = 'light';
        document.body.setAttribute('class', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        this.theme = 'dark';
        document.body.setAttribute('class', 'darkBody');
        localStorage.setItem('theme', 'dark');
      }
    },
  },
};
</script>
