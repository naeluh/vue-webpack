<template>
<nav>
<ul>
<li><a href="index.html">Home</a></li>
<li><a href="/about/">About</a></li>
<li><a href="/blog/">Blog</a></li>
</ul>
</nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {}
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";

ul {
  @include grid-container;
  li {
  	 @include grid-column(1);
  }
}

</style>
