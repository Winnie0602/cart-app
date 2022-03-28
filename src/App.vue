<template>
  <nav>
    <router-link :class="{active: $route.name === 'Home'}" to="/">Home</router-link> |
    <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link> 
    <!-- <router-link :class="{active: $route.name === 'top'}" to="/top">Top</router-link> -->
  </nav>
  <router-view/>
</template>

<script>
export default {
  mounted(){
    // 固定購物車金額
    this.$store.commit('updateCartFromLocalStorage')
    
  },
  methods: {
    Reload() {
      this.$store.commit("SetFalse");
    }
  }

}
</script>


<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
