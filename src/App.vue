<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
}
</style>

<style lang="scss">
@import "./assets/scss/main";
</style>
