<template>
  <div id="app">
    <section class="hero is-success is-fullheight">
      <headerHero></headerHero>
      <router-view></router-view>
      <footerHero></footerHero>
    </section>
  </div>
</template>

<script>
import HeaderHero from './components/HeaderHero'
import FooterHero from './components/FooterHero'

export default {
  name: 'app',
  components: {
    HeaderHero,
    FooterHero
  }
}
</script>

<style scoped lang="scss">
@import '../node_modules/bulma/css/bulma.css';

html, body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  height: 100%;
}

.is-success {
  background: #c2e59c;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #64b3f4, #c2e59c);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #64b3f4, #c2e59c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
