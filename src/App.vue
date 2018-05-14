<template>
  <div id="app">
    <header>
        <img src="./images/headerbg.jpg" class="herderbg">
    </header>
    <div class="nav">
      <ul>
        <li><router-link to="/">Family</router-link></li>
        <li><router-link to="/character">Character</router-link></li>
        <li><router-link to="">+</router-link></li>
        <li><router-link to="">+</router-link></li>
        <li><router-link to="">+</router-link></li>
        <li><router-link to="">+</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
.herderbg {
    height: 350px;
    width: 100%;
    display: block;
    filter: contrast(80%)
}
.nav ul {
  list-style-type: none;
  background-color: #181c1d;
}
.nav ul li {
  display: inline;
}
</style>
