<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'UserPreferences' }">Preferences</router-link>
    </div>
    <router-view/>
    <div>
      <button class="mui-btn mui-btn--raised mui-btn--danger" :title="theme == 'dark' ? 'Dark Theme' : 'Light Theme'" @click="toggleTheme()">Theme</button>
    </div>
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

<style lang="scss">
.darkBody {
  background-color: #2c3e50;
  h1,h2,h3,h4,h5,h6,p {
    color: #42b983;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
