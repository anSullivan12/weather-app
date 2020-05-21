<template>
  <div class="mui-container weather">
    <h1 class="mui--text-display1">Local Weather</h1>
    <form class="mui-form">
      <div class="mui-textfield mui-textfield--float-label">
        <input type="text">
        <label>Zip Code</label>
      </div>
      <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
