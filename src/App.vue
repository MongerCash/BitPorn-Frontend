<template>
  <div id="nav">
    <router-link to="/"><img width="144" src="http://bitporn.com/development/logo.png" alt="BitPorn Logo"></router-link>
    <router-link to="/basket"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;{{this.productsInBag.length}}</router-link> 
  </div>
  <router-view/>
</template>

<script>

  import { mapState } from 'vuex'
  export default {

    created() {
      this.$store.dispatch('loadProduct1');
      this.$store.dispatch('loadProduct2');
      this.$store.dispatch('loadProduct3');
      this.$store.dispatch('loadProduct4');
      this.$store.dispatch('loadShops');
      this.$store.dispatch('loadBag');
    },
    computed: mapState([
      'productsInBag' 
    ]),

  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;


  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
