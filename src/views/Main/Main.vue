<script>
  import Header from 'components/Header';
  import Footer from 'components/Footer';
  import img from 'public/example.jpg';

  export default {
    name: 'Main',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        img
      }
    }
  };
</script>

<template>
  <div class="main" :style="{'background-image': `url('${img}')`}">
    <div class="content">
      <Header />

      <div class="body" :class="$style.dark">
        Hello world!
      </div>

      <router-link to="about" class="go-to-about">
        Go to about page
      </router-link>

      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/core/styles/mixins";

  .main {
    @include wrapper;
    background: no-repeat center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(#fff, 0.1);
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

<style module lang="scss">
  .dark {
    color: #222;
  }
</style>
