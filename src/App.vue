<template>
  <div id="app">
    <div class="app-logo-container container">
      <img alt="Vue logo" class="app-logo" src="https://images.vexels.com/media/users/3/131779/isolated/preview/3d4929d289ad98ad71637d5c257d2f08-pizza-logo-1-by-vexels.png">
      <WeatherTray />
    </div>
    <OrderList/>
  </div>
</template>

<script>
import OrderList from './components/OrderList.vue' // Link Oder list Component to root app
import WeatherTray from './components/Weather.vue'
export default {
  name: 'App',
  components: {
    OrderList,
    WeatherTray
  }
}
</script>

<style>
/* Used fontawesome CDN for icons */
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0-11/css/all.min.css"; 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
.app-logo-container{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 135px;
}
.app-logo{
  width: 150px;
  flex: 0 1 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
