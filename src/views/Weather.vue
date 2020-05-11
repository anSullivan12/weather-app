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
    <div class="mui-row mui-panel weather-results">
      <div class="mui-col-md-8 mui--text-left">
        <p class="mui-subhead">North Canton, OH</p>
        <p class="mui-subhead">Date</p>
        <span class="material-icons">wb_sunny</span>
        <p class="mui--text-body1 forecast">Sunny with a high of 75</p>
      </div>
      <div class="mui-col-md-4">
        <h2 class="mui--text-display4 temp">72&deg;</h2>
      </div>
    </div>
  </div>
</template>
