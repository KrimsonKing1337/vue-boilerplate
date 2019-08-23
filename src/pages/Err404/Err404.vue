<script>
    export default {
        name: 'Err404'
    }
</script>

<template>
  <div class="error-404">
    <div class="warning">
      Error 404: Page not found
    </div>

    <router-link to="/" class="go-back">
      Go back
    </router-link>
  </div>
</template>

<style scoped lang="scss">
  @import "~common/styles/mixins";

  .error-404 {
    @include wrapper;
  }

  .warning {
    font-size: 24px;
    font-weight: bold;
    color: red;
  }

  .go-back {
    margin-top: 15px;
  }
</style>
