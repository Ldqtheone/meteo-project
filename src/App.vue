<template>
  <div id="app">
    <div class="nav">
      <router-link to="/" class="nav__link"><b-button variant="outline-primary">Home</b-button></router-link>
      <router-link to="/about" class="nav__link"><b-button variant="info">About</b-button></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav{
  justify-content: center;
}

.nav__link{
  margin-right: 50px;
  margin-bottom: 50px;
}
</style>
