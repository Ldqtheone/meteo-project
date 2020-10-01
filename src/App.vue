<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ name: 'Home' }" class="nav__link"
        ><b-button variant="outline-light" >Home</b-button></router-link
      >
      <router-link :to="{ name: 'About' }" class="nav__link"
        ><b-button variant="outline-light" >About</b-button></router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  background-color: #22adff;
}

#app {
  background: #22adff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.nav {
  justify-content: center;
}

.nav__link {
  margin-right: 50px;
  margin-bottom: 50px;
}
.button {
  border: none;
  border: solid 2px white;
  border-radius: 5px;
  padding: 10px;
  margin-left: 10px;
}
</style>
