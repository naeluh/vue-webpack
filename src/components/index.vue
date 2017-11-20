<template>
  <div class="hello">
    <div>User {{ $route.params.id }}</div>
    <ul v-for="a in arr">
    <li>
      <span>{{a.id}}</span>
    </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      arr: []
    }
  },
  methods: {
    get (params) {
      console.log(this.$route)
      const uri = this.$route.params.id
      return axios.get(`https://nhm.org/nature/map/map/searchobservations?params[project_id]=` + uri)
      .then((res) => {
        this.arr = res.data
      })
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
.hello {
  div {
    color:red;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>