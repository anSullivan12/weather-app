<template>
  <div class="weather mui-container-fluid">
    <h1 class="mui--text-display3">Local Weather</h1>
    <form class="mui-form">
      <div class="mui-textfield mui-textfield--float-label">
        <input type="text">
        <label>Zip Code</label>
      </div>
      <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
    </form>
    <div class="mui-container-fluid weather-results">
      <span class="material-icons">wb_sunny</span>
      <h2 class="mui--text-display2 temp">72&deg;</h2>
      <p class="mui--text-body1 forecast">Sunny with a high of 75</p>
    </div>
  </div>
</template>
