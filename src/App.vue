<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <!-- dinamic link - in case we change the path in router/index.js it will still work-->
    <router-link :to="{name : 'About'}">About</router-link>
    <router-link :to="{name : 'Jobs'}">Jobs</router-link>
    <!-- a links still works but made request to the server
    <a href="/about">About</a> -->
  </div>
  <!-- navigating history-->
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <router-view/>
</template>

<script>
  export default {

      methods: {
        redirect () {
          this.$router.push({name: 'Home'})
        },
        back () {
          this.$router.go(-1)
        },
        forward () {
          this.$router.go(1)
        }
      }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding:10px;
  margin: 5px;
  border-radius:4px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  background: rebeccapurple;
  color:#fff;
}

button{
  margin:0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
