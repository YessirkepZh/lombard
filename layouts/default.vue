<template>
  <div class="main">
    <LazyHydrate when-visible>
      <main-header></main-header>
    </LazyHydrate>
    <nuxt/>
    <LazyHydrate when-visible>
      <main-footer></main-footer>
    </LazyHydrate>
  </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration';
const Header = () => import("@/components/header/Header.vue");
const Footer = () => import("@/components/footer/Footer.vue");
export default {
  head: function() {
    return {
      htmlAttrs: {
        // lang: this.$i18n.locale,
      },
    };
  },
  components: {
    "main-header": Header,
    "main-footer": Footer,
    LazyHydrate,
  }
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
html,
body,
 .main {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
</style>

