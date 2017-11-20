<template>
<header id="header" class="header" role="banner">
  <nav class="container">
    <div class="logo">
      <a href="#"><img src="../assets/getty_logo_og.png"></a>
    </div>
    <div class="nav">
      <ul>
        <li><a href="#">LINK</a></li>
        <li><a href="#">LINK</a></li>
        <li><a href="#">LINK</a></li>
      </ul>
  	</div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Nav',
  data () {}
}
</script>

<style lang="scss" scoped>

@import "../assets/scss/main";
nav {
	@include grid-container;

	margin-bottom:2rem;

	.logo {
      @include grid-column(6);
		float: left;
	    width: 225px;
	    height: 70px;
	    background: url(../assets/getty_logo_og.png);
	    background-image: url(../assets/getty_logo_og.png),none;
	    background-repeat: no-repeat;
	    background-position: left center;
	    background-size: 100% auto;
	    position: relative;
	    display: block;
	    float: left;
	    width: 80px;
	    height: 80px;
	    background: url(../assets/getty_logo_og.png);
	    background-image: url(../assets/getty_logo_og.png),none;
	    background-repeat: no-repeat;
	    background-position: left center;
	    background-size: 100% auto;
	    line-height: 1;
	    overflow: hidden;
	    text-indent: 9999px;
	    z-index: 1;
	    margin-left: 0;
	}

	.nav {
		@include grid-column(6);
		float: right;
		ul {
		  height: 80px;
		  margin:0 auto;
		  padding:0;
		  list-style-type: none;
		  @include grid-container;
		  li {
			    cursor: pointer;
			    @include grid-column(4);
		    a {
		    	text-align:center;
			    padding: 28px 0;
			    font-size: 21px;
			    display: block;
			    background: #000;
			    color: #fff;
			    font-weight: 900;
			    text-decoration: none;
		    }
		  }
		}
	}
}


</style>
