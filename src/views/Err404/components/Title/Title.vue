<template>
  <div class="title" @click="handleClick">
    {{ text.title }}
  </div>
</template>

<script lang="ts">
  import Vue, { PropType } from 'vue';

  interface ComplexMessage {
    title: string,
    count: number,
  }

  export default Vue.extend({
    props: {
      text: {
        type: Object as PropType<ComplexMessage>,
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
