<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </div>
    <router-view/>
    <UserPreferences/>
  </div>
</template>

<script>
import UserPreferences from '@/components/UserPreferences.vue';

export default {
  components: {
    UserPreferences,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
  }
}
.mui-panel {
  margin-right: 20px;
}
body.darkBody {
  background-color: #212121;
  color: #FAFAFA;
  #app,
  .mui-textfield>input:focus~label, .mui-textfield>textarea:focus~label {
    color: #FAFAFA;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #FFB74D;
  }
  #nav a {
    color: #E0F7FA;
  }
  .mui-textfield>input {
    border-bottom: 1px solid rgba(255,255,255,.26);
    color: #FAFAFA;
  }
  .mui-panel {
    background-color: #424242;
    box-shadow: 0 2px 2px 0 rgba(255,255,255,.16), 0 0 2px 0 rgba(255,255,255,.12);
    color: #FAFAFA;
  }
  .mui-btn:focus,
  .mui-btn:hover {
    box-shadow: 0 0 2px rgba(255,255,255,.12), 0 2px 2px rgba(255,255,255,.2);
  }
}
</style>
