<script>
  import Title from './components/Title/Title.vue';

  export default {
    name: 'Err404',
    components: {
      Title
    }
  };
</script>

<template>
  <div class="error-404">
    {{ /* there must be an error */ }}
    <Title :text="{title: 123}" />

    <router-link to="/" class="go-back">
      Go back
    </router-link>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/core/styles/mixins";

  .error-404 {
    @include wrapper;
  }

  .go-back {
    margin-top: 15px;
  }
</style>
