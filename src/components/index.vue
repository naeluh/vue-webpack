<template>
<main id="main" role="main">
  <header class="container"><h1>Tum mihi Piso: Quid ergo?</h1></header>
  <article class="container">
      <section>

      </section>
      <aside>
  <h3>Placet igitur tibi, Cato, cum res sumpseris non concessas, ex illis efficere, quod velis?</h3>

<p>Quam nemo umquam voluptatem appellavit, appellat; Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? </p>

<p>Et quidem, inquit, vehementer errat; Iam enim adesse poterit. Traditur, inquit, ab Epicuro ratio neglegendi doloris. An quod ita callida est, ut optime possit architectari voluptates? Ad eos igitur converte te, quaeso. Sed quid minus probandum quam esse aliquem beatum nec satis beatum? Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Idemne potest esse dies saepius, qui semel fuit? Quis non odit sordidos, vanos, leves, futtiles? </p>      
      </aside>
    </article>
  </main>
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
      const uri = this.$route.params.id
      return axios.get(`http://localhost:8080/aat/` + uri + `.json`)
      .then((res) => {
        console.log(res.data)
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

$article: (
  columns: 12,
  gutter: 2rem
);

$article-phone: (
  columns: 12,
  gutter: 2rem,
  media: "(max-width: 768px)",
);

#main {

    header {
      padding-left:2rem;
    }

    article {
      @include grid-container;
    }

    section {
      @include grid-column(8, $article);

      @include grid-media($article-phone) {
          @include grid-column(12, $article);
      }
    }

    aside {
      @include grid-column(4, $article);
      
      @include grid-media($article-phone) {
          @include grid-column(12, $article);
      }
    }

}


</style>





