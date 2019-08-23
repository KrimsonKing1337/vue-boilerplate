<script>
  import Header from 'components/Header';
  import Footer from 'components/Footer';

  export default {
    name: 'Main',
    components: {
      Header,
      Footer
    }
  };
</script>

<template>
  <div class="main">
    <Header />

    <div class="body">
      Hello world!
    </div>

    <router-link to="about" class="go-to-about">
      Go to about page
    </router-link>

    <Footer />
  </div>
</template>

<style scoped lang="scss">
  @import "~common/styles/mixins";

  .main {
    @include wrapper;
  }

  .body {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }

  .go-to-about {
    margin-top: 15px;
  }
</style>
