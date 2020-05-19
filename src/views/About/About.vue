<script>
  import Header from 'components/Header';
  import Footer from 'components/Footer';

  export default {
    name: 'About',
    components: {
      Header,
      Footer
    }
  };
</script>

<template>
  <div class="about">
    <Header />

    <div class="body">
      About page
    </div>

    <router-link to="/" class="go-to-main">
      Go to main
    </router-link>

    <Footer />
  </div>
</template>

<style scoped lang="scss">
  @import "~common/styles/mixins";

  .about {
    @include wrapper;
  }

  .body {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }

  .go-to-main {
    margin-top: 15px;
  }
</style>
