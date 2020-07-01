<template>
  <div class="title" @click="handleClick">
    {{ title }}
  </div>
</template>

<script lang="ts">
  import Vue, { PropType } from 'vue';

  interface ComplexMessage {
    title: string,
  }

  export default Vue.extend({
    name: 'Title',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      handleClick(): void {
        if (this.$listeners.click) {
          return;
        }

        this.$router.go(-1);
      },
    }
  });
</script>

<style scoped lang="scss">
  .title {
    font-size: 24px;
    font-weight: bold;
    color: red;
  }
</style>
