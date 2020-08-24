<template>
  <section class="intro">
    <div class="container">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/utils/mixins.scss';

.intro {
  margin: 30px 0;
  width: 100%;
  text-align: center;
  color: #FFF;
  background-color: #4B30E3;

  h2 {
    font-size: rem(26px);
  }
}
</style>